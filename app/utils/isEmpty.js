// const isEmpty = value => 
//   value === undefined ||
//   value === null ||
//   (typeof value === 'object' && Object.keys(value).length === 0 ) ||
//   (typeof value === 'string' && value.trim().length === 0 ) 


const isEmpty = value => {
  try {
    let result = false;

    if (
      value === undefined ||
      value === null ||
      (typeof value === "string" && value.trim().length === 0) ||
      (typeof value === "object" && Object.keys(value).length === 0)
    )
      result = true;

    return result;
  } catch (err) {
    return err;
  }
}

module.exports = isEmpty