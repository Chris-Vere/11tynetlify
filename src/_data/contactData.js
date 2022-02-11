const toReturn = {};

const data = {
  name: 'Bonefish Capital, LLC',
  streetAddress: '13755 Hutton Drive, Suite 300',
  city: 'Farmers Branch',
  state: 'Texas',
  zip: '75234',
  phone: '2146922900',
  baseURL: 'http://www.bonefishcapital.com',
  email: 'info@bonefishcapital.com'
};

function formatPhonePretty() {
  const first = data.phone.slice(0, 3);
  const middle = data.phone.slice(3, 6);
  const last = data.phone.slice(7);
  return `(${first}) ${middle}-${last}`;
}

for(const prop in data) {
  toReturn[prop] = data[prop];
}

module.exports = {
  ...toReturn,
  phonePretty: formatPhonePretty(),
  phoneIntl: `+1${data.phone}`,
};
