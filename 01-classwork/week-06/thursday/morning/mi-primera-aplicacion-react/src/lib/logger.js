const getType = (value) => {
  if (typeof value === 'object') {
    if (value.length === 'undefined') return 'object';
    return 'array';
  }
  return typeof value;
};

const valueToString = (value) => {
  if (typeof value === 'function') return '-> Function ->';
  return JSON.stringify(value);
};

const buildObjectLog = (obj) => {
  if (!obj) return '    None';
  if (!Object.keys(obj).length) return '    None';
  const values = [];
  for (const key in obj) {
    values.push([key, obj[key]]);
  }
  return (
    values.reduce((str, curr) => {
      const [key, value] = curr;
      return (
        str +
        `      ${key}: ${valueToString(value)} --- type: ${getType(value)} \n`
      );
    }, '  {   \n') + '    }'
  );
};

export const logState = (name, state = {}) => {
  logState.renders++;
  console.log(
    `
  %c**************************************
  %c🔴 STATE UPDATED
  %c💻 IN ${name} COMPONENT
  %c🧐 TOTAL RENDERS: ${logState.renders}
  %c👵 PREVIOUS STATE
  %c${buildObjectLog(logState.prev)}
  %c🤖 RE RENDERING
  %c🐣 CURRENT STATE
  %c${buildObjectLog(state)}
  %c***************************************
  `,
    'color:green',
    'color:red',
    'color:red',
    'color:red',
    'color:red',
    'color:inherit',
    'color:red',
    'color:red',
    'color:inherit',
    'color:green',
  );
  logState.prev = state;
};

logState.renders = 0;
logState.prev = {};

export const logProps = (name, props = {}) => {
  console.log(props);
  logProps.renders++;
  console.log(
    `
  %c**************************************************
  %c🔵 PROPS UPDATED
  %c💻 IN ${name} COMPONENT
  %c🧐 TOTAL RENDERS: ${logProps.renders}
  %c👵 PREVIOUS PROPS
  %c${buildObjectLog(logProps.prev)}
  %c🤖 RE RENDERING
  %c🐣 NEW PROPS
  %c${buildObjectLog(props)}
  %c****************************************************
  `,
    'color:red',
    'color:green',
    'color:green',
    'color:green',
    'color:green',
    'color: inherit',
    'color: green',
    'color:green',
    'color:inherit',
    'color:red',
  );
  logState.prev = props;
};

logProps.renders = 0;
logState.prev = {};

export const logStateAndProps = (name, state = {}, props = {}) => {
  logStateAndProps.renders++;
  console.log(
    `
  %c****************************************************
  %c🔴 STATE OR PROPS UPDATED
  %c💻 IN ${name} COMPONENT
  %c🧐 TOTAL RENDERS: ${logProps.renders}
  %c👵 OLD STATE
  %c${buildObjectLog(logStateAndProps.prevState)}
  %c👴 OLD PROPS
  %c${buildObjectLog(logStateAndProps.prevProps)}
  %c🤖 RE RENDERING
  %c✨ NEW STATE
  %c${buildObjectLog(state)}
  %c✨ NEW PROPS
  %c${buildObjectLog(props)}
  %c*******************************************************************
  `,
    'color:purple',
    'color:inherit',
    'color:inherit',
    'color:inherit',
    'color:inherit',
    'color:green',
    'color:inherit',
    'color:blue',
    'color:inherit',
    'color:inherit',
    'color:green',
    'color:inherit',
    'color:blue',
    'color:purple',
  );
  logStateAndProps.prevProps = props;
  logStateAndProps.prevState = state;
};

logStateAndProps.renders = 0;
logStateAndProps.prevState = {};
logStateAndProps.prevProps = {};
