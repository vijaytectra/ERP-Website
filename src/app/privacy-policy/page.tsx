import PolicyList from "@/components/standardComponents/PolicyList";
import PolicyParagraph from "@/components/standardComponents/PolicyParagraph";
import PolicySection from "@/components/standardComponents/PolicySection";
import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <header className="text-center mb-12">
                <h1 className="text-2xl lg:text-3xl font-extrabold text-text-heading">Privacy Policy</h1>
                <p className="mt-3 text-gray-500">
                    Last updated: {new Date().toLocaleDateString('en-US', {
                        year: 'numeric', month: 'long', day: 'numeric'
                    })}
                </p>
            </header>

            <div className="flex flex-col space-y-10">
                <PolicySection title="1. Introduction">
                    <PolicyParagraph>
                        Welcome to EduSuite (&quot;Company,&quot; &quot;we,&quot; &quot;Our,&quot; &quot;us,&quot;). We are committed to protecting the privacy and security of our clients and their users. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website,{" "}
                        <Link href="/" className="underline hover:text-primary">
                            www.edusuite.com
                        </Link>
                        , or use our cloud-based Enterprise Resource Planning (ERP) platform (the &quot;service&quot;).
                    </PolicyParagraph>
                    <PolicyParagraph>
                        By using our Service, you signify your acceptance of this policy. If you do not agree, please do not use our website or Service.
                    </PolicyParagraph>
                </PolicySection>

                <PolicySection title="2. Information We Collect">
                    <PolicyList
                        title="a. Information You Provide to Us:"
                        items={[
                            "Contact and Demo Requests: When you request a demo or contact us, we collect your name, institution name, role, email, phone number, and any message you provide.",
                            "Service Data: As a data processor for educational institutions, our platform securely stores data they provide, which may include student and staff profiles, academic records, fee and payment details, attendance logs, and parent/guardian contact information."
                        ]}
                    />
                    <PolicyList
                        title="b. Information We Collect Automatically:"
                        items={[
                            "Log and Usage Data: Like most websites, we may collect information your browser sends, such as your IP address, browser type, pages visited, and the time and date of your visit.",
                            "Cookies: We may use cookies to enhance your experience, remember your preferences, and gather analytics about website traffic."
                        ]}
                    />
                </PolicySection>

                <PolicySection title="3. How We Use Your Information">
                     <PolicyList
                        items={[
                            "To Provide and Maintain Our Service: To operate our ERP platform, manage user accounts, and provide customer support.",
                            "To Respond to Inquiries: To schedule demos and communicate with you about your request.",
                            "For Analytics and Improvement: To understand how our website and Service are used, identify trends, and improve functionality and user experience.",
                            "For Security and Compliance: To protect against fraud, secure our platform, conduct audits, and fulfill our legal obligations.",
                            "For Communication: To send administrative information, such as updates to our terms, and, with your consent, marketing communications."
                        ]}
                    />
                </PolicySection>
                
                {/* ... other sections from your code go here ... */}

                <PolicySection title="9. Contact Us">
                    <PolicyParagraph>
                        If you have any questions about this Privacy Policy, please contact us at:
                    </PolicyParagraph>
                     <PolicyList
                        items={[
                            "Email: contact@edusuite.com",
                            "Address: 123 Education Lane, Knowledge City, 45678"
                        ]}
                    />
                </PolicySection>
            </div>
        </div>
    );
}
