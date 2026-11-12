import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { parentName, studentName, phone, email, age, track, billingPeriod, amount } = data;

    console.log('New enrollment submission received:', {
      parentName,
      studentName,
      phone,
      email,
      age,
      track,
      billingPeriod: billingPeriod || 'monthly',
      amount: amount || 'GH₵ 950',
    });

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey && apiKey !== 're_placeholder' && !apiKey.startsWith('re_placeholder')) {
      try {
        const resend = new Resend(apiKey);
        const { data: resendData, error } = await resend.emails.send({
          from: 'Path School Enrollment <onboarding@resend.dev>',
          to: ['bd.scriptlabsdigital@gmail.com'],
          subject: `New Enrollment: ${studentName}`,
          html: `
            <h1>New Enrollment Received</h1>
            <p><strong>Parent Name:</strong> ${parentName}</p>
            <p><strong>Student Name:</strong> ${studentName}</p>
            <p><strong>Student Age:</strong> ${age}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Email Address:</strong> ${email}</p>
            <p><strong>Preferred Track:</strong> ${track}</p>
            <p><strong>Billing Option:</strong> ${billingPeriod === 'annual' ? 'Annual (GH₵ 10,260)' : 'Monthly (GH₵ 950)'}</p>
          `,
        });

        if (error) {
          console.warn('Resend email warning (non-blocking):', error);
        } else {
          console.log('Resend email dispatched successfully:', resendData);
        }
      } catch (emailError) {
        console.warn('Failed to send Resend email (non-blocking):', emailError);
      }
    } else {
      console.log('RESEND_API_KEY is not configured or is a placeholder. Skipping email dispatch.');
    }

    // Always succeed so the client proceeds directly to Paystack payment without interruption
    return NextResponse.json({ success: true, message: 'Enrollment recorded successfully' });
  } catch (error) {
    console.error('Error in /api/enroll:', error);
    // Even in error scenarios, we allow client to proceed to payment
    return NextResponse.json({ success: true, message: 'Enrollment received with warnings' });
  }
}
