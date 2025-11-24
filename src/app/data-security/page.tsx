import PolicyList from "@/components/standardComponents/PolicyList";
import PolicyParagraph from "@/components/standardComponents/PolicyParagraph";
import PolicySection from "@/components/standardComponents/PolicySection";


export default function DataSecurityPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <header className="text-center mb-12">
                <h1 className="text-2xl lg:text-3xl font-extrabold text-text-heading">Data Security at EduSuite</h1>
                <p className="mt-3 text-gray-500">
                    Our Commitment to Protecting Your Institution&apos;s Data
                </p>
            </header>

            <div className="flex flex-col space-y-10">
                <PolicySection title="1. Our Security Philosophy">
                    <PolicyParagraph>
                        At EduSuite, we understand that educational institutions are entrusted with highly sensitive data. The security, confidentiality, and integrity of the data you manage through our platform are our highest priorities. This document outlines the technical and organizational measures we have implemented to provide a bank-grade, secure, and compliant ERP environment.
                    </PolicyParagraph>
                </PolicySection>

                <PolicySection title="2. Data Encryption">
                    <PolicyParagraph>
                        To protect data from unauthorized access, all information is encrypted at every stage:
                    </PolicyParagraph>
                    <PolicyList
                        items={[
                            "Encryption in Transit: All data transmitted between your browser and our servers is protected using industry-standard TLS (Transport Layer Security) encryption.",
                            "Encryption at Rest: All underlying data, including student information, academic records, and uploaded documents, is encrypted on our servers using AES-256 or a similarly strong cryptographic standard.",
                            "Field-Level Encryption: Highly sensitive data, such as Aadhaar numbers and bank account information, undergoes an additional layer of field-level encryption within our database for enhanced protection."
                        ]}
                    />
                </PolicySection>

                <PolicySection title="3. Access Control">
                    <PolicyParagraph>
                        We enforce strict access controls to ensure that users can only view and modify data they are authorized to see.
                    </PolicyParagraph>
                    <PolicyList
                        items={[
                            "Role-Based Access Control (RBAC): Our platform features a granular RBAC system. Administrators at your institution can define specific roles (e.g., Principal, Teacher, Accountant) and assign precise permissions, limiting access to relevant modules and data.",
                            "Principle of Least Privilege: We design our systems to ensure that any user or system process is only granted the minimum level of access required to perform its function."
                        ]}
                    />
                </PolicySection>

                <PolicySection title="4. Authentication and Account Security">
                    <PolicyParagraph>
                        Secure access to the EduSuite platform is enforced through multiple layers of authentication.
                    </PolicyParagraph>
                    <PolicyList
                        items={[
                            "Two-Factor Authentication (2FA): We provide 2FA for all administrator accounts to add a critical second layer of security against unauthorized logins.",
                            "Session Management: The system includes configurable session timeouts to automatically log users out after a period of inactivity, reducing the risk of unauthorized access from unattended devices.",
                            "Failed-Attempt Lockouts: To protect against brute-force attacks, accounts are temporarily locked after a series of failed login attempts."
                        ]}
                    />
                </PolicySection>

                <PolicySection title="5. Infrastructure and Network Security">
                    <PolicyParagraph>
                        Our Service is hosted on leading cloud infrastructure providers (such as AWS or Google Cloud) that offer state-of-the-art physical and network security.
                    </PolicyParagraph>
                    <PolicyList
                        items={[
                            "Firewalls and Intrusion Detection: Our network is protected by firewalls and actively monitored by intrusion detection and prevention systems.",
                            "Regular Security Audits: Our infrastructure undergoes regular vulnerability scanning and penetration testing to identify and remediate potential threats."
                        ]}
                    />
                </PolicySection>

                <PolicySection title="6. Data Backup and Disaster Recovery">
                    <PolicyParagraph>
                        We have a comprehensive backup and recovery strategy to ensure business continuity and protect against data loss.
                    </PolicyParagraph>
                    <PolicyList
                        items={[
                            "Daily Automated Backups: We perform full, automated backups of your institution&apos;s data on a daily basis.",
                            "Geo-Redundant Storage: Backups are stored in a geo-redundant manner, meaning they are replicated across multiple geographic locations to protect against regional disasters or outages.",
                            "Restore Verification: We regularly test our backup and restore procedures to ensure data can be recovered quickly and reliably in the event of an emergency."
                        ]}
                    />
                </PolicySection>

                <PolicySection title="7. Compliance and Audit Readiness">
                    <PolicyParagraph>
                        Our platform is built to support the compliance and accreditation needs of modern educational institutions.
                    </PolicyParagraph>
                    <PolicyList
                        items={[
                            "Immutable Audit Trails: The system logs all significant actions performed by users, creating an immutable record that can be reviewed for security and compliance purposes.",
                            "Audit-Ready Mode: Before an audit or inspection, administrators can enable a special lock mode to prevent any further changes to data, ensuring the integrity of the records presented.",
                            "PCI-Ready Payments: Our payment modules are designed to be compliant with the Payment Card Industry Data Security Standard (PCI DSS) to ensure secure handling of payment information."
                        ]}
                    />
                </PolicySection>

                <PolicySection title="8. Your Responsibility">
                    <PolicyParagraph>
                        While we provide a secure platform, security is a shared responsibility. We encourage institutions to educate their users on best practices, such as creating strong passwords, being aware of phishing attempts, and reporting suspicious activity immediately.
                    </PolicyParagraph>
                </PolicySection>

                <PolicySection title="9. Contact Us">
                    <PolicyParagraph>
                        If you have any questions about our security practices or wish to report a potential vulnerability, please contact our security team directly at:
                    </PolicyParagraph>
                    <PolicyParagraph>
                        Email:{" "}
                        <a href="mailto:theedusuite@zohomail.in" className="underline hover:text-primary">
                            theedusuite@zohomail.in
                        </a>
                    </PolicyParagraph>
                </PolicySection>
            </div>
        </div>
    );
}
