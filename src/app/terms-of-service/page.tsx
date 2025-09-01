import PolicyList from "@/components/standardComponents/PolicyList";
import PolicyParagraph from "@/components/standardComponents/PolicyParagraph";
import PolicySection from "@/components/standardComponents/PolicySection";
import Link from "next/link";

export default function TermsAndServicesPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <header className="text-center mb-12">
                <h1 className="text-2xl lg:text-3xl font-extrabold text-text-heading">Terms and Conditions</h1>
                <p className="mt-3 text-gray-500">
                    Last updated: {new Date().toLocaleDateString('en-US', {
                        year: 'numeric', month: 'long', day: 'numeric'
                    })}
                </p>
            </header>

            <div className="flex flex-col space-y-10">
                <PolicySection title="1. Introduction">
                    <PolicyParagraph>
                        Welcome to EduSuite (&quot;company,&quot; &quot;we,&quot; &quot;our,&quot; &quot;us&quot; ). These Terms and Conditions (&quot;Terms&quot;) govern your use of our website and our cloud-based Enterprise Resource Planning (ERP) platform, including all related modules, features, and services (collectively, the &quot;Service&quot;).
                    </PolicyParagraph>
                    <PolicyParagraph>
                        By accessing our website or using our Service, you, and the institution you represent, agree to be bound by these Terms. If you do not agree, you are not permitted to use the Service.
                    </PolicyParagraph>
                </PolicySection>

                <PolicySection title="2. Definitions">
                    <PolicyList
                        items={[
                            `"Service" refers to the EduSuite ERP platform and all related features, including but not limited to admissions, fees, academics, compliance, and analytics modules.`,
                            `"Institution" refers to the school, college, university, or preschool that has subscribed to our Service.`,
                            `"User" refers to an individual (such as an administrator, teacher, student, or parent) authorized by an Institution to use the Service.`,
                            `"Institutional Data" refers to any data, information, or material provided or submitted by an Institution or its Users to the Service.`
                        ]}
                    />
                </PolicySection>

                <PolicySection title="3. Use of the Service">
                    <PolicyParagraph>
                        We grant the Institution a limited, non-exclusive, non-transferable license to access and use the Service for its internal operational purposes, subject to these Terms and the applicable subscription plan.
                    </PolicyParagraph>
                    <PolicyList
                        title="You agree not to:"
                        items={[
                            "Use the Service for any unlawful purpose or in violation of any applicable laws.",
                            "Resell, sublicense, or otherwise make the Service available to any third party.",
                            "Attempt to reverse engineer, decompile, or discover the source code of the Service.",
                            "Use the Service to store or transmit infringing, libelous, or otherwise unlawful material.",
                            "Interfere with the security or performance of the Service, including through the use of viruses or malware."
                        ]}
                    />
                </PolicySection>

                <PolicySection title="4. Institutional Responsibilities">
                    <PolicyParagraph>
                        The Institution is solely responsible for:
                    </PolicyParagraph>
                    <PolicyList
                        items={[
                            "The accuracy, quality, and legality of all Institutional Data.",
                            "Ensuring that it has obtained all necessary consents (e.g., from parents, guardians, and staff) to collect, process, and manage data within the Service, in compliance with applicable privacy laws.",
                            "Managing User access, including provisioning and de-provisioning accounts.",
                            "Maintaining the confidentiality of administrator login credentials."
                        ]}
                    />
                </PolicySection>

                <PolicySection title="5. Intellectual Property Rights">
                    <PolicyParagraph>
                        We own all right, title, and interest in and to the Service, including all underlying software, technology, and content (excluding Institutional Data). No rights are granted to you hereunder other than as expressly set forth in these Terms.
                    </PolicyParagraph>
                    <PolicyParagraph>
                        The Institution retains all ownership rights to its Institutional Data. You grant us a limited license to use, process, and store Institutional Data solely for the purpose of providing and improving the Service.
                    </PolicyParagraph>
                </PolicySection>

                <PolicySection title="6. Data Security and Privacy">
                    <PolicyParagraph>
                        We are committed to protecting the security and privacy of your data. We implement robust technical and organizational measures, including encryption, role-based access control, and secure backups, to safeguard Institutional Data. Our data handling practices are further described in our{" "}
                        <Link href="/privacy-policy" className="underline hover:text-primary">
                            Privacy Policy
                        </Link>
                        , which is incorporated by reference into these Terms.
                    </PolicyParagraph>
                </PolicySection>

                <PolicySection title="7. Disclaimers">
                    <PolicyParagraph>
                        THE SERVICE IS PROVIDED &quot;AS IS&quot; &quot;AS AVILABLE.&quot; WE DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
                    </PolicyParagraph>
                </PolicySection>

                <PolicySection title="8. Limitation of Liability">
                    <PolicyParagraph>
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL OUR COMPANY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, ARISING FROM YOUR USE OF THE SERVICE.
                    </PolicyParagraph>
                    <PolicyParagraph>
                        OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE TOTAL FEES PAID BY THE INSTITUTION TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                    </PolicyParagraph>
                </PolicySection>

                <PolicySection title="9. Governing Law">
                    <PolicyParagraph>
                        These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any legal suit, action, or proceeding shall be instituted exclusively in the courts located in Chennai, Tamil Nadu.
                    </PolicyParagraph>
                </PolicySection>

                <PolicySection title="10. Changes to Terms">
                    <PolicyParagraph>
                        We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the new Terms on our website and updating the &quot;Last updated&quot; date. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.
                    </PolicyParagraph>
                </PolicySection>

                <PolicySection title="11. Contact Information">
                    <PolicyParagraph>
                        If you have any questions about these Terms and Conditions, please contact us at:
                    </PolicyParagraph>
                    <PolicyList
                        items={[
                            "Email: legal@edusuite.com",
                            "Address: 123 Education Lane, Knowledge City, 45678"
                        ]}
                    />
                </PolicySection>
            </div>
        </div>
    );
}
