module.exports = ({request_email, assignee_name}) => {
    return `
		<!doctype html>
		<html>
		<head>
				<meta charset="utf-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
				<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
				<style>
					html,
					body {
						margin: 0 auto !important;
						padding: 0 !important;
						width: 100% !important;
						font-family: sans-serif;
						line-height: 1.4;
						-webkit-font-smoothing: antialiased;
						-ms-text-size-adjust: 100%;
						-webkit-text-size-adjust: 100%; 
					}
					* {
						-ms-text-size-adjust: 100%;
					}
					table,
					td {
						mso-table-lspace: 0pt !important;
						mso-table-rspace: 0pt !important;
					}
					img {
						display: block;
						border: none;
						max-width: 100%; 
						-ms-interpolation-mode: bicubic;
					}
					a:hover {
						background: linear-gradient(135deg, #ff8645 0, #d14d06 80%) !important;
					}
				</style>
			</head>
			<body
				leftmargin="0" 
				marginwidth="0" 
				topmargin="0" 
				marginheight="0" 
				offset="0" 
				bgcolor="#F3F5F9"
				width="100%"
				style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background: #F3F5F9;"
			>
				<table
					role="presentation"
					align="center" 
					valign="top" 
					border="0" 
					cellpadding="0" 
					cellspacing="0" 
					height="100%" 
					width="100%" 
					bgcolor="#F3F5F9" 
					style="border-spacing: 0; 
						border-collapse: collapse; 
						vertical-align: top; 
						padding: 0; 
						margin: 0; 
						width: 100%; 
						background: #F3F5F9"
				>
					<tr>
						<td align="center"  valign="top">
							<table 
								role="presentation"
								align="center" 
								border="0" 
								cellpadding="0" 
								cellspacing="0" 
								width="600"
								style="max-width: 600px; 
									border-spacing: 0; 
									border-collapse: collapse; 
									vertical-align: top; 
									padding: 0; 
									margin: 0; 
									width: 100%"
							>
							</table>
						</td>	
					</tr>
					<tr>
						<td height=20" style="height: 20px;">
						</td>
					</tr>
					<tr>
						<td align="center" valign="top">
							<table 
								role="presentation"
								align="center" 
								border="0" 
								cellpadding="0" 
								cellspacing="0" 
								width="600" 
								bgcolor="#ffffff" 
								style="max-width: 600px; 
									border-spacing: 0; 
									border-collapse: collapse; 
									vertical-align: top; 
									padding: 0; 
									margin: 0; 
									width: 100%;
									background: #ffffff;"
							>
								<tr>
									<td align="center" valign="top">
										<table 
											role="presentation"
											align="center" 
											border="0" 
											cellpadding="0" 
											cellspacing="0" 
											width="440" 
											style="max-width: 440px;
												border-spacing: 0; 
												border-collapse: collapse; 
												vertical-align: top; 
												padding: 0; 
												margin: 0;
												width: 100%;"
										>
											<tr>
												<td align="center">
													<img 
														src="https://wmt.mindit.systems/assets/media/logos/logo-black-R.png" 
														width="170"
														style="border: none; display: block; max-width: 170px; width: 100%; margin-top:30px;"
													>
												</td>
											</tr>			
											<tr>
												<td height="40" style="height:40px">	
												</td>
											</tr>
											<tr>
												<td>
													<h1 
														style="font-family: Arial, Helvetica, sans-serif; 
															font-size: 24px; 
															color: #010E28; 
															font-weight: bold; 
															margin: 0; 
															margin-bottom: 5px;
															padding: 0"
													>
														Hi, ${assignee_name}!
													</h1>
													<p 
														style="font-family: Arial, Helvetica, sans-serif; 
															font-size: 16px; 
															color: #010E28;  
															margin: 0; 
															padding: 0"
													>
														Request Access Notification
													</p>
												</td>
											</tr>
											<tr>
												<td height="15" style="height: 15px">
												</td>
											</tr>
											<tr>
												<td>
													<p 
														style="font-family: Arial, Helvetica, sans-serif; 
															font-size: 15px; 
															color: #5B6987; 
															margin: 0; 
															padding: 0; 
															line-height: 20px;"
														>
														Following user has requested access to the WMT Application:
													</p>
												</td>
											</tr>
											<tr>
												<td height="45" style="height: 45px">
													<p 
														style="font-family: Arial, Helvetica, sans-serif; 
															font-size: 15px; 
															color: #5B6987; 
															margin: 0; 
															padding-left: 20px; 
															line-height: 20px;"
														>
														email: <b>${request_email}</b>
													</p>
												</td>
											</tr>
											<tr>
												<td align="center">
													<table 
														role="presentation"
														border="0" 
														cellpadding="0" 
														cellspacing="0" 
														width="440" 
														style="max-width: 340px;
															border-spacing: 0; 
															border-collapse: collapse; 
															vertical-align: top;
															margin-top: 30px;
															width: 100%;"
													>
														<tr>
															<td 
																style="font-family: Arial, Helvetica, sans-serif;
																	width: 300px; 
																	background-color:  #e65100;
																	background: linear-gradient(135deg, #e65100 0, #e65100 80%); 
																	color: #FFF; 
																	height: 55px; 
																	line-height: 55px; 
																	border-radius: 35px; 
																	text-align: center; 
																	font-weight: bold;"
															>
																<a 
																	href="https://wmt.mindit.systems/manager-userlist"
																	style="font-family: Arial, Helvetica, sans-serif;
																		width: 100%; 
																		background-color:  #e65100;
																		background: linear-gradient(135deg, #e65100 0, #e65100 80%); 
																		color: #FFF; 
																		height: 55px; 
																		line-height: 55px; 
																		border-radius: 35px; 
																		text-align: center; 
																		font-weight: bold; 
																		display: block; 
																		text-decoration: none;
																		cursor: pointer;"
																>
																	Go to WMT Portal
																</a>
															</td>
														</tr>
													</table>	
												</td>
											</tr>
											<tr>
												<td height="45" style="height: 45px">
												</td>
											</tr>
											<tr>
												<td>
													<p 
														style="font-family: Arial, Helvetica, sans-serif; 
															font-size: 15px; 
															color: #5B6987; 
															margin: 0; 
															padding: 0; 
															line-height: 20px;"
													>
														<strong style="font-weight: bold; color: #010E28">Workflow Management Team</strong><br /> Mind IT Systems
													</p>
												</td>
											</tr>
											<tr>
												<td height="30" style="height: 30px">
												</td>
											</tr>
										</table>	
									</td>
								</tr>
							</table>	
						</td>
					</tr>
					<tr>
						<td height="20" style="height: 20px">
						</td>
					</tr>
				</table>
		</body>
		</html>
    `
};
