import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Last updated: December 2024
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data We Collect</h2>
                <p className="text-gray-600 mb-4">
                  At Green-Reporting, we collect information that you provide directly to us, such as when you create an account, 
                  fill out a form, or contact us for support. This may include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Personal information (name, email address, phone number)</li>
                  <li>Company information (organization name, role, industry)</li>
                  <li>Sustainability data and metrics you input into our platform</li>
                  <li>Communication preferences and feedback</li>
                  <li>Technical information about how you use our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Data</h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to provide, maintain, and improve our services, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Delivering our sustainability reporting and analysis services</li>
                  <li>Communicating with you about your account and our services</li>
                  <li>Providing customer support and responding to your inquiries</li>
                  <li>Improving our platform and developing new features</li>
                  <li>Sending you relevant updates about sustainability best practices</li>
                  <li>Complying with legal obligations and protecting our rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and monitoring</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response procedures for data breaches</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Access: Request copies of your personal information</li>
                  <li>Rectification: Request correction of inaccurate or incomplete data</li>
                  <li>Erasure: Request deletion of your personal information</li>
                  <li>Portability: Request transfer of your data to another service</li>
                  <li>Objection: Object to certain types of data processing</li>
                  <li>Restriction: Request limitation of data processing</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  To exercise any of these rights, please contact us at privacy@greenreporting.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>With service providers who assist us in operating our platform</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>With your explicit consent for specific purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
                <p className="text-gray-600 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our platform. 
                  These technologies help us:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze platform usage and performance</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Ensure platform security and prevent fraud</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. 
                  We will notify you of any material changes by posting the updated policy on our website and updating the 
                  "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-2"><strong>Email:</strong> privacy@greenreporting.com</p>
                  <p className="text-gray-600 mb-2"><strong>Phone:</strong> +91 98765 43210</p>
                  <p className="text-gray-600"><strong>Address:</strong> 123 Green Way, Eco City, Earth 12345</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;