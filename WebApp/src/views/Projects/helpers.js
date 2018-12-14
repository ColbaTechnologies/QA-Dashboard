export const getColorByStatus = status => {
  if ("pass" === status) {
    return "success";
  }
  if ("fail" === status) {
    return "danger";
  }
  if ("suspended" === status) {
    return "warning";
  }
  return "default";
};

export const transformString = model => {
  let stringModel = JSON.stringify(model);

  model.dataRequirements.forEach(item => {
    var regex = new RegExp("{{" + item.key + "}}", "gm");
    stringModel = stringModel.replace(regex, item.value);
  });
  return JSON.parse(stringModel);
};
