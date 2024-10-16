import contentSecurityPolicyBuilder from 'content-security-policy-builder';

// Read about csp:
// https://github.com/americanexpress/one-app/blob/main/docs/api/modules/App-Configuration.md#csp
export default contentSecurityPolicyBuilder({
  directives: {
    reportUri: process.env.ONE_CLIENT_CSP_REPORTING_URL,
    defaultSrc: [
      "'self'",
    ],
    scriptSrc: [
      "'self'",
      'localhost:3000',
    ],
    imgSrc: [
      "'self'",
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
    ],
    connectSrc: [
      "'self'",
      'localhost:3000',
      'localhost:8400/auth',
      'localhost:8080',
      'localhost:8302',
    ],
  },
});
