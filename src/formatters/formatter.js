import stylish from '../stylish.js';

const formatter = (data, format = 'stylish') => {
  switch (format) {
    case 'stylish':
      return stylish(data);
    default:
      throw new Error(`Unknown format ${format}`);
  }
};

export default formatter;
