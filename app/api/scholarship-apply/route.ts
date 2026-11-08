import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { 
      studentName, 
      parentName, 
      email, 
      phone, 
      age, 
      city, 
      track, 
      scholarshipType, 
      statement, 
      portfolioUrl, 
      householdContext 
    } = data;

    if (!email || !studentName) {
      return NextResponse.json({ error: 'Student name and email are required' }, { status: 400 });
    }

    const { data: resendData, error } = await resend.emails.send({
      from: 'Path School Scholarships <onboarding@resend.dev>',
      to: ['bd.scriptlabsdigital@gmail.com'], 
      subject: `New Scholarship Application: ${studentName} (${track})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; line-height: 1.6; color: #16082a;">
          <h2 style="color: #6c3696; border-bottom: 2px solid #ede4f5; padding-bottom: 8px;">New Scholarship Application</h2>
          <p>A new student has submitted an application for the Path School Opportunity & Merit Scholarship Fund.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 180px;">Student Name:</td><td>${studentName}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Age / Grade:</td><td>${age || 'Not specified'}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Parent / Guardian:</td><td>${parentName || 'Not specified'}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Contact Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Phone / WhatsApp:</td><td>${phone || 'Not specified'}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">City & Country:</td><td>${city || 'Not specified'}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Desired Track:</td><td><strong>${track || 'Not selected'}</strong></td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Scholarship Category:</td><td>${scholarshipType || 'General Need & Merit'}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Portfolio / Project Link:</td><td>${portfolioUrl ? `<a href="${portfolioUrl}">${portfolioUrl}</a>` : 'None provided'}</td></tr>
          </table>

          <h3 style="color: #16082a; margin-top: 20px;">What the student wants to build:</h3>
          <div style="background-color: #f7f1fb; padding: 14px; border-left: 4px solid #6c3696; border-radius: 4px; font-style: italic;">
            ${statement ? statement.replace(/\n/g, '<br/>') : 'No statement entered'}
          </div>

          ${householdContext ? `
            <h3 style="color: #16082a; margin-top: 20px;">Financial Context / Circumstances:</h3>
            <div style="background-color: #fcfcfc; border: 1px solid #e5e5df; padding: 12px; border-radius: 4px;">
              ${householdContext.replace(/\n/g, '<br/>')}
            </div>
          ` : ''}

          <p style="margin-top: 24px; font-size: 12px; color: #888;">
            Sent automatically via Path School Admissions portal (pathschool.io/scholarships).
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: resendData });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
