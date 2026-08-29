// Contact notification email template
export function getContactNotificationTemplate(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}): string {
  const { name, email, phone, company, service, message } = data;

  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Form Submission</title>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
    "
  >
    <div
      style="
        max-width: 600px;
        margin: 0 auto;
        background-color: white;
        padding: 20px;
      "
    >
      <h2
        style="
          color: #333;
          border-bottom: 2px solid #007bff;
          padding-bottom: 10px;
          margin-top: 0;
        "
      >
        New Contact Form Submission
      </h2>

      <div
        style="
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        "
      >
        <h3 style="color: #495057; margin-top: 0">Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ""}
      </div>

      <div style="background-color: #e9ecef; padding: 20px; border-radius: 8px">
        <h3 style="color: #495057; margin-top: 0">Project Details</h3>
        <p style="white-space: pre-wrap; line-height: 1.6">${message}</p>
      </div>

      <div
        style="
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #dee2e6;
          color: #6c757d;
          font-size: 14px;
        "
      >
        <p>This message was sent from your website contact form.</p>
        <p>Reply directly to this email to respond to ${name}.</p>
      </div>
    </div>
  </body>
</html>
  `.trim();
}

// Auto-reply email template
export function getAutoReplyTemplate(data: { name: string }): string {
  const { name } = data;

  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thank You for Contacting Us</title>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
    "
  >
    <div
      style="
        max-width: 600px;
        margin: 0 auto;
        background-color: white;
        padding: 20px;
      "
    >
      <h2
        style="
          color: #333;
          border-bottom: 2px solid #007bff;
          padding-bottom: 10px;
          margin-top: 0;
        "
      >
        Thank You for Your Interest!
      </h2>

      <p>Dear ${name},</p>

      <p>
        Thank you for reaching out to <strong>Seedflow</strong>. We have
        received your message and will get back to you within 24 hours.
      </p>

      <div
        style="
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        "
      >
        <h3 style="color: #495057; margin-top: 0">What happens next?</h3>
        <ul style="color: #495057">
          <li>Our team will review your project requirements</li>
          <li>We'll prepare a customized proposal for your needs</li>
          <li>
            We'll schedule a consultation call to discuss your project in detail
          </li>
        </ul>
      </div>

      <p>
        In the meantime, feel free to explore Seedflow and learn more about
        managing your business finances.
      </p>

      <div
        style="
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #dee2e6;
        "
      >
        <p style="color: #6c757d; font-size: 14px">
          Best regards,<br />
          The <strong>Seedflow</strong> Team
        </p>
      </div>
    </div>
  </body>
</html>
  `.trim();
}
