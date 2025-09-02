import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

// Define the props that the template will accept
interface ContactEmailTemplateProps {
  name: string;
  institutionName: string;
  email: string;
  mobileNumber: string;
  message: string;
  submittedAt: string;
}

// Define inline styles for a consistent look across email clients
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  border: '1px solid #f0f0f0',
  borderRadius: '8px',
};

const box = {
  padding: '0 48px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '30px 0',
};

const text = {
  color: '#555',
  fontSize: '14px',
  lineHeight: '24px',
};

const sectionTitle = {
  ...text,
  fontWeight: 'bold',
  color: '#0056b3', // A darker blue for titles
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
};

// The email template component
export const ContactEmailTemplate = ({
  name,
  institutionName,
  email,
  mobileNumber,
  message,
  submittedAt,
}: ContactEmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>New Demo Request from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Heading style={h1}>New Demo Request</Heading>
          
          <Text style={text}>
            You have received a new inquiry from your website&apos;s contact form.
            Details are provided below.
          </Text>

          <Hr style={hr} />

          {/* --- Submission Details --- */}
          <Text style={sectionTitle}>Submitter Information:</Text>
          <Text style={text}>
            <strong>Full Name:</strong> {name}
          </Text>
          <Text style={text}>
            <strong>Institution:</strong> {institutionName}
          </Text>
          <Text style={text}>
            <strong>Email Address:</strong> {email}
          </Text>
          <Text style={text}>
            <strong>Mobile Number:</strong> {mobileNumber}
          </Text>

          <Hr style={hr} />

          {/* --- Message --- */}
          <Text style={sectionTitle}>Message:</Text>
          <Text style={text}>{message}</Text>

          <Hr style={hr} />

          {/* --- Footer --- */}
          <Text style={footer}>
            This request was submitted on {submittedAt}. Please respond in a timely manner.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactEmailTemplate;
