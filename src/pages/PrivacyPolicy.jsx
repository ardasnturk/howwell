import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              How we collect, use, and protect your information
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card prose prose-invert max-w-none"
          >
            <div className="text-white/80 space-y-8">
              {/* Effective Date */}
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <p className="text-sm text-white/60 font-medium">
                  <strong>Effective Date:</strong> June 14, 2025
                </p>
              </div>

              {/* Introduction */}
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Thank you for using our app ("we", "our", or "us"). We are
                  committed to protecting your privacy. This Privacy Policy
                  explains how we handle information when you use our mobile
                  application.
                </p>
              </div>

              {/* Section 1: No User Accounts */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm mr-3">
                    1
                  </span>
                  No User Accounts
                </h2>
                <div className="ml-11">
                  <p className="leading-relaxed">
                    Our app does not require user registration or account
                    creation. Users are identified by a local nickname that is
                    stored only on the device. This nickname is used for
                    gameplay purposes and is never transmitted or stored in any
                    cloud service in a personally identifiable way.
                  </p>
                </div>
              </div>

              {/* Section 2: Data Collection */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm mr-3">
                    2
                  </span>
                  Data Collection
                </h2>
                <div className="ml-11 space-y-4">
                  <p className="leading-relaxed">
                    We do not collect any personal data such as names, email
                    addresses, or location information. The only data
                    transmitted to our backend (Firebase) is:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white/40 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-white">
                          Room and Game Data:
                        </strong>{" "}
                        Information related to game sessions (e.g. room ID,
                        questions, player answers) is temporarily stored in
                        Firebase Realtime Database or Firestore for the duration
                        of the session.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white/40 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-white">
                          Language Preference:
                        </strong>{" "}
                        Your selected language is used to fetch the correct
                        version of the questions.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white/40 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong className="text-white">
                          Temporary User Nicknames:
                        </strong>{" "}
                        Automatically generated nicknames may be shared with
                        other players in the same game room to facilitate
                        gameplay. This data is stored temporarily and
                        automatically deleted after the game session ends.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Analytics */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm mr-3">
                    3
                  </span>
                  Analytics
                </h2>
                <div className="ml-11">
                  <p className="leading-relaxed">
                    We do not use third-party analytics services. No behavioral
                    tracking, device fingerprinting, or ad-related profiling is
                    conducted.
                  </p>
                </div>
              </div>

              {/* Section 4: Data Storage & Deletion */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm mr-3">
                    4
                  </span>
                  Data Storage & Deletion
                </h2>
                <div className="ml-11">
                  <p className="leading-relaxed">
                    All game-related data is deleted from our database once the
                    game session concludes. No long-term storage or history of
                    games is maintained.
                  </p>
                </div>
              </div>

              {/* Section 5: Admin Access */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm mr-3">
                    5
                  </span>
                  Admin Access (Development Only)
                </h2>
                <div className="ml-11">
                  <p className="leading-relaxed">
                    During development builds, the app contains an admin panel
                    used exclusively for testing and content management. This
                    panel is only accessible to authorized developers and is not
                    available in production builds.
                  </p>
                </div>
              </div>

              {/* Section 6: Firebase Services */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm mr-3">
                    6
                  </span>
                  Firebase Services
                </h2>
                <div className="ml-11">
                  <p className="leading-relaxed">
                    We use Firebase for backend functionality. Firebase may
                    collect some non-personal data for operational and security
                    purposes (e.g., anonymized usage statistics, crash reports).
                    Please refer to
                    <a
                      href="https://firebase.google.com/support/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline font-medium"
                    >
                      Firebase Privacy and Security
                    </a>{" "}
                    for more details.
                  </p>
                </div>
              </div>

              {/* Section 7: Children's Privacy */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm mr-3">
                    7
                  </span>
                  Children's Privacy
                </h2>
                <div className="ml-11">
                  <p className="leading-relaxed">
                    Our app is not intended for children under the age of 13. We
                    do not knowingly collect or solicit any personal information
                    from anyone under the age of 13.
                  </p>
                </div>
              </div>

              {/* Section 8: Changes to This Policy */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm mr-3">
                    8
                  </span>
                  Changes to This Policy
                </h2>
                <div className="ml-11">
                  <p className="leading-relaxed">
                    We may update this Privacy Policy from time to time. If we
                    make changes, we will notify users by updating the date at
                    the top of this document. Continued use of the app after
                    changes constitutes acceptance of the new policy.
                  </p>
                </div>
              </div>

              {/* Section 9: Contact Us */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm mr-3">
                    9
                  </span>
                  Contact Us
                </h2>
                <div className="ml-11">
                  <p className="leading-relaxed mb-4">
                    If you have any questions or concerns about this policy,
                    please contact us at:
                  </p>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 space-y-3">
                    <div className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5 text-white/60"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <div>
                        <span className="text-white/60">Email: </span>
                        <a
                          href="mailto:ardasnturk@me.com"
                          className="text-white hover:underline font-medium"
                        >
                          ardasnturk@me.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5 text-white/60"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <span className="text-white/60">Developer: </span>
                        <span className="text-white font-medium">
                          Arda Sentürk
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
