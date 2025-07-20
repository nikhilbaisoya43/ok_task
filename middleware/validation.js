const Joi = require("joi").extend(require("@joi/date"));
const logger = require('../app/services/winstonLogger');
const moment = require('moment');
const { regexPatterns } = require('../app/common/constants');
const Crypto = require("crypto-js");
const userValidator = {
  validateAddUser: (request, response, next) => {
    const addUserSchema = Joi.object({
      first_name: Joi.string().min(1).max(40).required(),
      last_name: Joi.string().min(1).max(40).required(),
      email: Joi.string().email({ tlds: { allow: ['com'] } }).required(),
      password: Joi.string().regex(regexPatterns.USER_PASSWORD).required(),
      joining_date: Joi.date().format('DD-MM-YYYY').messages({ 'date.format': 'Date format is DD-MM-YYYY' }).allow("", null),
      date_of_birth: Joi.date().format('DD-MM-YYYY').messages({ 'date.format': 'Date format is DD-MM-YYYY' }).allow("", null),
      Specialties: Joi.array().items(Joi.number().integer()).required(),
      employee_id: Joi.string().required(),
      role_id: Joi.number().valid(1, 2, 3, 4),
      location_id: Joi.array().items(Joi.number().integer()),
      client_id: Joi.array().items(Joi.number().integer()),
      designation_id: Joi.string().required(),
    })
    try {
      if (request.body.password) {        
        const encrypted_password = request.body.password;        
        const decrypted_password = Crypto.AES.decrypt(encrypted_password, process.env.AES_CRYPTO_KEY);      
        const password = decrypted_password.toString(Crypto.enc.Utf8);        
        request.body.password = password;      
      }
      validateUserRegister(request.body, addUserSchema, next)
    } catch (error) {
      logger.error('User validation failed');
      response.status(400).json({
        success: false,
        message: error.message,
      })
    }
  },

  validateLoginUser: (request, response, next) => {
    const loginUserSchema = Joi.object({
      email: Joi.string().email({ tlds: { allow: ['com'] } }).required(),
      password: Joi.string().required()
    })
    try {
      validateUserLogin(request.body, loginUserSchema, next)
    } catch (error) {
      logger.error('User login validation failed');
      response.status(400).json({
        success: false,
        message: "Email or Password does not match",
      })
    }
  },

  validateUpdateUser: (request, response, next) => {
    const updateUserSchema = Joi.object({
      id: Joi.string().alphanum().min(1).max(6),
      first_name: Joi.string().min(3).max(40),
      last_name: Joi.string().min(3).max(40),
      email: Joi.string().email({ tlds: { allow: ['com'] } }),
      mobileNo: Joi.number().integer().min(7000000000).max(9999999999),
      address: Joi.string().min(5).max(80),
      department: Joi.string().min(2).max(20),
      manager: Joi.string().min(3).max(40),
      joiningDate: Joi.date().format('DD-MM-YYYY').messages({ 'date.format': 'Date format is DD-MM-YYYY' }),
      RoleId: Joi.number().valid(1, 2, 3)
    })
    try {
      validateUserUpdate(request.body, updateUserSchema, next);
    } catch (error) {
      logger.error('User update validation failed');
      response.status(400).json({
        success: false,
        message: error,
      });
    };
  },

  validateApplyLeave: (request, response, next) => {
    const applyLeaveUserSchema = Joi.object({
      reason: Joi.string().required(),
      from_date: Joi.date().required(),
      to_date: Joi.date().required()
    })
    try {
      validateApplyLeave(request.body, applyLeaveUserSchema, next);
    } catch (error) {
      response.status(400).json({
        success: false,
        message: error.details,
      })
    }
  },

  validateUpdatePassword: (request, response, next) => {
    const updateUserPasswordSchema = Joi.object({
      previous_password: Joi.string().required(),
      new_password: Joi.string().required(),
    })
    try {
      validateUpdatePassword(request.body, updateUserPasswordSchema, next);
    } catch (error) {
      logger.error('User password update validation failed');
      response.status(400).json({
        success: false,
        message: error,
      });
    };
  }
};

const chartValidator = {
  validateChartFormData: async (chartInfo) => {
    const chartFormValidationSchema = Joi.object({
      unique_task_no: Joi.string().required(),
      name: Joi.string().allow(null),
      description: Joi.string().allow('', null),
      start_date: Joi.date().required(),
      end_date: Joi.date().required(),
      HoldReasons: Joi.array().items(Joi.number().integer()),
      MilestoneId: Joi.number().integer().required(),
      assignee_id: Joi.number().integer().allow(null),
      estimation: Joi.string().regex(/^\d\d:\d\d/).allow('', null),
      EpicId: Joi.number().integer().allow(null),
      SprintId: Joi.number().integer().allow(null),
    })
    try {
      const validate = validateChartFormData(chartInfo, chartFormValidationSchema);
      return validate;
    } catch (err) {
      logger.error('Chart form validation failed');
      throw { err, custom_err: new Error('Chart Form Validation Failed') };
    }
  },

  validateChartComment: (request, response, next) => {
    const chartCommentValidationSchema = Joi.object({
      parent_id: Joi.number().integer(),
      comment_msg: Joi.string().required(),
      FlaggedCommentId: Joi.number().integer(),
      FlagId: Joi.number().integer(),
    })
    try {
      validateChartComment(request.body, chartCommentValidationSchema, next)
    } catch (error) {
      response.status(400).json({
        success: false,
        message: error.details,
      })
    }
  },

  validateChartVolume: (request, response, next) => {
    const chartVolumeValidationSchema = Joi.object({
      ClientId: Joi.number().integer(),
      ProcessId: Joi.number().integer(),
      SpecialtyId: Joi.number().integer(),
      start_date: Joi.date().required(),
      end_date: Joi.date().required()

    })
    try {
      validateChartVolume(request.body, chartVolumeValidationSchema, next)
    } catch (error) {
      response.status(400).json({
        success: false,
        message: error.details,
      })
    }
  },

  validateTaskLoggedHours: async (request, response, next) => {
    const logHoursValidationSchema = Joi.object({
      hours: Joi.string().regex(regexPatterns.DURATION_GLOBAL).required().messages({
        "string.empty": `Log hours must be filled`,
        "string.pattern.base": `Log hours must be in the supported formats only`,
        "any.required": `Log hours must be filled`
      }),
      date: Joi.date().format('DD-MM-YYYY').required().messages({
        "string.empty": `Date must be filled`,
        "any.required": `Date must be filled`
      }),
      description: Joi.string().max(500).required(),
    })
    try {
      validateLogHours(request.body, logHoursValidationSchema, next);
    } catch (error) {
      logger.error(`Could not save logged hours for Task ${request?.params?.id} | ${error.message}`, { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.details[0].message,
        error: error.details
      })
    }
  },
}

const validateLogHours = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        hours: requestData.hours,
        date: requestData.date,
        description: requestData.description
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
}

const worklistValidator = {
  validateWorklistVolume: (request, response, next) => {
    const worklistVolumeValidationSchema = Joi.object({
      worklist_name: Joi.string().trim().min(3).max(100).required().messages({ "string.empty": "Project name characters should be in between 3 to 100" }),
      ClientId: Joi.number().integer().required(),
      ProcessId: Joi.number().integer().required(),
      SpecialtyId: Joi.array().items(Joi.number().integer()).required(),
      project_member: Joi.array().items(Joi.number().integer()).required(),
      start_date: Joi.date().required(),
      end_date: Joi.date().min(Joi.ref('start_date')).required(),
      duration: Joi.number().integer().min(0).max(100).required(),
      project_owner: Joi.number().integer().required()
    })
    try {
      validateWorklistVolume(request.body, worklistVolumeValidationSchema, next);
    } catch (error) {
      if (error.details[0].type === 'string.empty') {
        response.status(400).json({
          success: false,
          message: 'Field cannot be empty',
          error: error.details
        });
      } else {
        response.status(400).json({
          success: false,
          message: 'Input validation failed',
          error: error.details
        });
      }
    }
  },

  validateWorklistUpdate: (request, response, next) => {
    const worklistVolumeValidationSchema = Joi.object({
      worklist_name: Joi.string().trim().min(3).max(100).required().messages({ "string.empty": "Project name characters should be in between 3 to 100" }),
      ClientId: Joi.number().integer().required(),
      ProcessId: Joi.number().integer().required(),
      start_date: Joi.date().required(),
      end_date: Joi.date().min(Joi.ref('start_date')).required(),
      duration: Joi.number().integer().min(0).max(100).required(),
      WorklistStatusId: Joi.number().integer().min(0).max(100).required(),
      project_owner: Joi.number().integer().required()
    })
    try {
      validateWorklistUpdate(request.body, worklistVolumeValidationSchema, next);
    } catch (error) {
      if (error.details[0].type === 'string.empty') {
        response.status(400).json({
          success: false,
          message: 'Field cannot be empty',
          error: error.details
        });
      } else {
        response.status(400).json({
          success: false,
          message: 'Input validation failed',
          error: error.details
        });
      }
    }
  },

  validateModifyCharts: (request, response, next) => {

    const modifyChartValidationSchema = Joi.object({
      TaskId: Joi.array().min(1).items(Joi.number().integer()).required(),
      coder: Joi.number().integer().allow('', null),
      // auditor: Joi.number().integer().allow('', null),
      PriorityId: Joi.number().integer(),
    })
    try {
      validateModifyCharts(request.body, modifyChartValidationSchema, next)
    } catch (error) {
      response.status(400).json({
        success: false,
        errors: error,
      })
    }
  },

  validateReallocationAuditor: (request, response, next) => {
    const reallocateAuditorValidationSchema = Joi.object({
      UserId: Joi.number().integer(),
      auditor_id: Joi.number().integer()
    })
    try {
      validateReallocationAuditor(request.body, reallocateAuditorValidationSchema, next)
    } catch (error) {
      response.status(400).json({
        success: false,
        message: error.details,
      })
    }
  }
}

const validateModifyCharts = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        TaskId: requestData.TaskId,
        coder: requestData.coder,
        // auditor: requestData.auditor,
        PriorityId: requestData.PriorityId
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error.details
  }
}

const validateReallocationAuditor = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        UserId: requestData.AuditorId,
        auditor_id: requestData.AuditorId,
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error.message
  }
};

const attendanceValidator = {
  validateAddAttendance: (request, response, next) => {
    const addAttendanceSchema = Joi.object({
      user_id: Joi.number().integer().required(),
      is_on_leave: Joi.number().integer().required(),
    });
    try {
      attendanceRegister(request.body, addAttendanceSchema, next);
    } catch (error) {
      response.status(400).json({
        success: false,
        message: "Validation ERROR!",
      });
    }
  },
};

const attendanceRegister = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        user_id: requestData.user_id,
        is_on_leave: requestData.is_on_leave,
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "Validation ERROR!",
    });
  }
};

const validateChartFormData = (requestData, joiSchema) => {
  try {
    Joi.assert(
      {
        unique_task_no: requestData.unique_task_no,
        name: requestData.name,
        description: requestData.description,
        start_date: requestData.start_date,
        end_date: requestData.end_date,
        HoldReasons: requestData.HoldReasons,
        MilestoneId: requestData.MilestoneId,
        assignee_id: requestData.assignee_id,
        estimation: requestData.estimation,
        EpicId: requestData.EpicId,
        SprintId: requestData.SprintId
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    return true;
  } catch (error) {
    throw error;
  }
}

const validateWorklistVolume = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        worklist_name: requestData.worklist_name,
        ClientId: requestData.ClientId,
        ProcessId: requestData.ProcessId,
        SpecialtyId: requestData.SpecialtyId,
        project_member: requestData.project_member,
        start_date: moment(requestData.start_date, 'DD-MM-YYYY').format('YYYY-MM-DD'),
        end_date: moment(requestData.end_date, 'DD-MM-YYYY').format('YYYY-MM-DD'),
        duration: requestData?.duration,
        project_owner: requestData.project_owner
      },
      joiSchema,
      {
        abortEarly: true,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
}
const validateWorklistUpdate = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        worklist_name: requestData.name,
        ClientId: requestData.client,
        ProcessId: requestData.ProcessId,
        duration: requestData.duration,
        start_date: moment(requestData.start_date, 'DD-MM-YYYY').format('YYYY-MM-DD'),
        end_date: moment(requestData.end_date, 'DD-MM-YYYY').format('YYYY-MM-DD'),
        project_owner: requestData?.owner,
        WorklistStatusId: requestData.status,
      },
      joiSchema,
      {
        abortEarly: true,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
}

const validateChartVolume = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        ClientId: requestData.ClientId,
        ProcessId: requestData.ProcessId,
        SpecialtyId: requestData.SpecialtyId,
        start_date: requestData.start_date,
        end_date: requestData.end_date
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error.message;
  }
}

const validateChartComment = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        parent_id: requestData.parent_id,
        comment_msg: requestData.comment_msg,
        FlaggedCommentId: requestData.FlaggedCommentId,
        FlagId: requestData.FlagId,
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
}

const validateUserRegister = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        first_name: requestData.first_name,
        last_name: requestData.last_name,
        email: requestData.email,
        password: requestData.password,
        joining_date: requestData.joining_date,
        date_of_birth:requestData.date_of_birth,
        Specialties: requestData.Specialties,
        employee_id: requestData.employee_id,
        role_id: requestData.role_id,
        location_id: requestData.location_id,
        client_id: requestData.client_id,
        designation_id: requestData.designation_id,
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
};

const validateUserLogin = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        email: requestData.email,
        password: requestData.password
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw new Error("Email or Password Invalid");
  }
};

const validateUserUpdate = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        id: requestData.id,
        first_name: requestData.first_name,
        last_name: requestData.last_name,
        email: requestData.email,
        mobileNo: requestData.mobileNo,
        address: requestData.address,
        department: requestData.department,
        manager: requestData.manager,
        joiningDate: requestData.joiningDate,
        RoleId: requestData.RoleId,
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
};

const validateApplyLeave = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        reason: requestData.reason,
        from_date: requestData.from_date,
        to_date: requestData.to_date
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
};

const validateUpdatePassword = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        previous_password: requestData.previous_password,
        new_password: requestData.new_password
      },
      joiSchema,
      {
        abortEarly: false
      }
    );
    next();
  } catch (error) {
    throw error;
  }
}

const configurationValidator = {
  validateAddConfiguration: (request, response, next) => {
    const addConfiguration = Joi.object({
      processes: Joi.array().items(Joi.string().trim()),
      specialties: Joi.array().items(Joi.string().trim()),
      prim_diag_feed: Joi.array().items(Joi.string().trim()),
      sec_diag_feed: Joi.array().items(Joi.string().trim()),
      procedure_feed: Joi.array().items(Joi.string().trim()),
      ed_em_feed: Joi.array().items(Joi.string().trim()),
      modifier_feed: Joi.array().items(Joi.string().trim()),
      auditorOption: Joi.array().items(Joi.string().trim()),
      feedback_types: Joi.array().items(Joi.string().trim()),
      hold_reasons: Joi.array().items(Joi.string().trim()),
      responsible_parties: Joi.array().items(Joi.string().trim()),
    })

    try {
      validateconfiguration(request.body["newData"], addConfiguration, next)
    } catch (error) {
      logger.error('Configuration validation failed');
      if (error.details[0].type === 'string.empty') {
        response.status(400).json({
          success: false,
          message: 'Field cannot be empty'
        });
      } else {
        response.status(400).json({
          success: false,
          message: error.message
        });
      }
    }
  }
}

const validateconfiguration = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        processes: requestData.processes,
        specialties: requestData.specialties,
        prim_diag_feed: requestData.primfeed,
        sec_diag_feed: requestData.sec_diag_feed,
        procedure_feed: requestData.procedure_feed,
        ed_em_feed: requestData.ed_em_feed,
        modifier_feed: requestData.modifier_feed,
        auditorOption: requestData.auditorOption,
        feedback_types: requestData.feedback_types,
        hold_reasons: requestData.hold_reasons,
        responsible_parties: requestData.responsible_parties,
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
}

const locationValidator = {
  validateAddLocation: (request, response, next) => {
    const addLocation = Joi.object({
      locations: Joi.array().min(1).items(Joi.string().trim()).required().messages({
        "any.required": "Please enter a location name first",
        "string.empty": "Field cannot be empty",
        "array.min": "Enter at least one location"
      }),
      client_id: Joi.number().integer().required(),
    })

    try {
      validateLocation(request.body["newData"], request.params.client_id, addLocation, next)
    } catch (error) {
      logger.error(`Add new Location validation failed for Client ID: ${request.params.client_id}`, { User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.details[0].message,
      })
    }
  }
}

const validateLocation = (requestData, client_id, joiSchema, next) => {
  try {
    Joi.assert(
      {
        locations: requestData.locations,
        client_id: client_id,
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
}

const allocateChartValidator = {
  validateAllocateChart: (request, response, next) => {
    const allocateChartValidationSchema = Joi.object({
      from: Joi.number().integer().required(),
      to: Joi.number().integer().required(),
      userId: Joi.required()
    })
    try {
      validateAllocateChart(request.body, allocateChartValidationSchema, next)
    } catch (error) {
      response.status(400).json({
        success: false,
        message: 'Input Validation failed',
        error: error.details,
      })
    }
  },
}

const validateAllocateChart = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        from: requestData.from,
        to: requestData.to,
        userId: requestData.userId
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
}

const assignChartValidator = {
  validateAssignChart: (request, response, next) => {
    const assignChartValidationSchema = Joi.object({
      list: Joi.array()
        .items(
          Joi.object({
            from: Joi.number().required(),
            to: Joi.number().required(),
            userId: Joi.required(),
          })
        )
        .required(),
      worklistId: Joi.required(),
    });
    try {
      validateAssignChart(request.body, assignChartValidationSchema, next);
    } catch (error) {
      response.status(400).json({
        success: false,
        message: "Input Validation failed",
        error: error.details,
      });
    }
  },
};

const validateAssignChart = (requestData, joiSchema, next) => {
  try {
    let result = joiSchema.validate(requestData, { abortEarly: false });
    if (result.error) {
      throw result.error
    }
    else {
      next();
    }
  } catch (error) {
    throw error;
  }
}

const chartTypeaheadValidator = {
  validateChartTypeahead: (request, response, next) => {
    const chartTypeaheadSchema = Joi.object({
      worklist_no: Joi.string(),
      mr_no: Joi.string(),
      chart_no: Joi.string(),
    })
    try {
      validateChartTypeahead(request.body, chartTypeaheadSchema, next)
    } catch (error) {
      response.status(400).json({
        success: false,
        message: 'Input Validation failed',
        error: error.details,
      })
    }
  },
}

const validateChartTypeahead = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        worklist_no: requestData.worklist_no,
        mr_no: requestData.mr_no,
        chart_no: requestData.chart_no
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
}


const newUserValidator = {
  validateNewUser: (request, response, next) => {
    const schema = Joi.object({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      date_of_birth: Joi.date().format('DD-MM-YYYY').messages({ 'date.format': 'Date format is DD-MM-YYYY' }).allow("", null),
      joining_date: Joi.date().format('DD-MM-YYYY').messages({ 'date.format': 'Date format is DD-MM-YYYY' }).allow("", null),  
      email: Joi.string().email().required(),
      employee_id: Joi.string().required(),
      RoleId: Joi.number().integer().required(),
      DesignationId: Joi.number().integer().required(),
      Locations: Joi.array().items(Joi.number().integer()),
      Clients: Joi.array().items(Joi.number().integer()),
      Specialties: Joi.array().items(Joi.number().integer()).required(),
    });
    try {
      validateNewUser(request.body, schema, request.params, next)
    } catch (error) {
      response.status(400).json({
        success: false,
        message: 'Input Validation failed',
        error: error.details,
      })
    }
  },
}

const validateNewUser = (requestData, schema, params, next) => {
  try {
    if (params.access_status === 'grant') {
      let result = schema.validate(requestData, { abortEarly: false });
      if (result.error) {
        throw result.error
      }
      else {
        next();
      }
    }
    else {
      next();
    }

  } catch (error) {
    throw error;
  }
}

const profileValidator = {
  validateProfile: (request, response, next) => {
    const schema = Joi.object({
      first_name: Joi.string().required(),
      last_name: Joi.string().allow('').required(),
      date_of_birth: Joi.date().format('DD-MM-YYYY').messages({ 'date.format': 'Date format is DD-MM-YYYY' }).allow("", null),
      joining_date: Joi.date().format('DD-MM-YYYY').messages({ 'date.format': 'Date format is DD-MM-YYYY' }).allow("", null),
      RoleId: Joi.number().integer().required(),
      DesignationId: Joi.number().integer().required(),
      Locations: Joi.array().items(Joi.number().integer()),
      Clients: Joi.array().items(Joi.number().integer()),
      Specialties: Joi.array().items(Joi.number().integer()).required(),
      employee_id: Joi.string().required()
    });
    try {
      validateProfile(request.body, schema, next)
    } catch (error) {
      response.status(400).json({
        success: false,
        message: 'Input Validation failed',
        error: error.details,
      })
    }
  },
}

const validateProfile = (requestData, schema, next) => {
  try {
    let result = schema.validate(requestData, { abortEarly: false });
    if (result.error) {
      throw result.error
    }
    else {
      next();
    }
  } catch (error) {
    throw error;
  }
}

const epicValidator = {
  validateAddEpic: (request, response, next) => {
    const addEpicSchema = Joi.object({
      name: Joi.string().required(),
      description: Joi.string().allow("", null),
      worklist_id: Joi.number().integer().required(),
    })
    try {
      validateAddEpicFunc(request.body, addEpicSchema, next)
    } catch (error) {
      logger.error('Add Epic validation failed | ', error);
      response.status(400).json({
        success: false,
        message: 'Could not validate input',
        error: error.details[0].message ?? 'Could not validate input'
      })
    }
  },
  validateUpdateEpic: (request, response, next) => {
    const updateEpicSchema = Joi.object({
      name: Joi.string().allow("", null),
      description: Joi.string().allow("", null)
    })
    try {
      validateUpdateEpicFunc(request.body, updateEpicSchema, next)
    } catch (error) {
      logger.error('Update Epic Update validation failed | ', error);
      response.status(400).json({
        success: false,
        message: error
      })
    }
  },
  validateDeleteEpic: (request, response, next) => {
    const deleteEpicSchema = Joi.object({
      id: Joi.number().integer().required()
    })
    try {
      validateDeleteEpicFunc(request.params, deleteEpicSchema, next)
    } catch (error) {
      logger.error('Epic Delete validation failed | ',  error);
      response.status(400).json({
        success: false,
        message: error,
      })
    }
  },
  validateEpicManagementTask: (request, response, next) => {
    const managementTaskEpicSchema = Joi.object({
      id: Joi.number().integer().required(),
      worklist: Joi.number().integer().required(),
    })
    try {
      validateEpicManagementTaskFunc(request.params.id, request.query.worklist, managementTaskEpicSchema, next)
    } catch (error) {
      logger.error('Epic Management Task validation failed | ', error);
      response.status(400).json({
        success: false,
        message: error,
      })
    }
  },
}

const validateAddEpicFunc = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        name: requestData.name,
        description: requestData.description,
        worklist_id: requestData.worklist_id,
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
};
const validateUpdateEpicFunc = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        name: requestData.name,
        description: requestData.description,
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
};
const validateDeleteEpicFunc = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        id: requestData.id
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
};
const validateEpicManagementTaskFunc = (id, worklist, joiSchema, next) => {
  try {
    Joi.assert(
      {
        id,
        worklist
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
};

const sprintValidator = {
  validateAddSprint: (request, response, next) => {
    const addSprintSchema = Joi.object({
      name: Joi.string().required(),
      description: Joi.string().allow('', null),
      owner_id: Joi.number().allow('', null),
      worklist_id: Joi.number().integer().required(),
      start_date: Joi.string().allow("", null),
      end_date: Joi.string().allow("", null),
    })
    try {
      validateAddSprintFunc(request.body, addSprintSchema, next)
    } catch (error) {
      logger.error('Sprint validation failed');
      response.status(400).json({
        success: false,
        message: error,
      })
    }
  },
  validateUpdateSprint: (request, response, next) => {
    const updateSprintSchema = Joi.object({
      name: Joi.string().allow("", null),
      description: Joi.string().allow("", null),
      owner_id: Joi.number().allow("", null),
      worklist_id: Joi.number().integer().allow("", null),
      start_date: Joi.string().allow("", null),
      end_date: Joi.string().allow("", null),
    })
    try {
      validateUpdateSprintFunc(request.body, updateSprintSchema, next)
    } catch (error) {
      logger.error('Sprint update validation failed');
      response.status(400).json({
        success: false,
        message: error,
      })
    }
  },
  validateDeleteSprint: (request, response, next) => {
    const deleteSprintSchema = Joi.object({
      id: Joi.number().integer().required()
    })
    try {
      validateDeleteSprintFunc(request.params.id, deleteSprintSchema, next)
    } catch (error) {
      logger.error('Sprint Delete validation failed');
      response.status(400).json({
        success: false,
        message: error,
      })
    }
  },
  validateSprintManagementTasks: (request, response, next) => {
    const deleteSprintSchema = Joi.object({
      id: Joi.number().integer().required(),
      worklist: Joi.number().integer().required()
    })
    try {
      validateSprintManagementTasksFunc(request.params.id, request.query.worklist, deleteSprintSchema, next)
    } catch (error) {
      logger.error('Sprint Management Tasks validation failed');
      response.status(400).json({
        success: false,
        message: error,
      })
    }
  }
};

const validateAddSprintFunc = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        name: requestData.name,
        description: requestData.description,
        owner_id: requestData.sprint_owner,
        worklist_id: requestData.worklist_id,
        start_date: requestData.start_date,
        end_date: requestData.end_date,
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
};

const validateUpdateSprintFunc = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        name: requestData.name,
        description: requestData.description,
        owner_id: requestData.sprint_owner,
        worklist_id: requestData.worklist_id,
        start_date: requestData.start_date,
        end_date: requestData.end_date,
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  }
  catch (error) {
    throw error;
  }
}

const validateDeleteSprintFunc = (sprintId, joiSchema, next) => {
  try{
    Joi.assert(
      {
        id: sprintId
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  }
  catch(error){
    throw error;
  }
}

const validateSprintManagementTasksFunc = (sprintId, worklist ,joiSchema, next) => {
  try{
    Joi.assert(
      {
        id: sprintId,
        worklist
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  }
  catch(error){
    throw error;
  }
}

const timesheetValidator = {
  validateTimesheetRequest: (request, response, next) => {
    const timesheetSchema = Joi.object({
      users: Joi.array().items(Joi.number().integer()),
      month: Joi.number().allow('', null),
      projects: Joi.array().items(Joi.number().integer()),
    })
    try {
      validateTimesheet(request.body, timesheetSchema, next)
    } catch (error) {
      logger.error('Timesheet validation failed', { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error,
      })
    }
  },
}

const commentValidator = {
  validateComment: (request, response, next) => {
    const commentBody = Joi.object({
      user_message: Joi.string().trim().min(1).max(250).required().messages({ "string.empty": "Comment characters should be in between 1 to 250" }),
      notification_id: Joi.number().integer().required()
    })
    try {
      validateComment(request.body, commentBody, next)
    } catch (error) {
      response.status(400).json({
        success: false,
        message: 'Input Validation failed',
        error: error.details,
      })
    }
  },
}

const validateTimesheet = (requestData, schema, next) => {
  try {
    Joi.assert(
      {
        users: requestData.users,
        month: requestData.month,
        projects: requestData.projects,
      },
      schema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
}

const validateComment = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        user_message: requestData.user_message,
        notification_id: requestData.notification_id
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
}

const plannedEstimationValidator = {
  validatePlannedEstimation: (request, response, next) => {
    const projectEstimationSchema = Joi.object({
      project_id: Joi.number().integer().positive().required(),
      tag_id: Joi.number().integer().positive().required(),
      estimation_hours: Joi.number().precision(2).positive(),
    });
    try {
      validatePlannedEstimation(request.body, projectEstimationSchema, next);
    } catch (error) {
      response.status(400).json({
        success: false,
        message: "Input Validation failedsssss",
        error: error.details,
      });
    }
  },
};

const validatePlannedEstimation = (requestData, joiSchema, next) => {
  try {
    Joi.assert(
      {
        project_id: requestData.project_id,
        tag_id: requestData.tag_id,
        estimation_hours: requestData.estimation_hours
      },
      joiSchema,
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    throw error;
  }
};

module.exports = { userValidator, attendanceValidator, chartValidator, worklistValidator, configurationValidator, locationValidator, allocateChartValidator, assignChartValidator, chartTypeaheadValidator, newUserValidator, profileValidator, epicValidator, sprintValidator, timesheetValidator, commentValidator, plannedEstimationValidator };
