function getRule(status) {
  switch (status) {
    case "join":
      return ["ruleDesc1", "ruleDesc2", "ruleDesc3", "ruleDesc4"];

    case "ranking":
      return ["ruleDesc5", "ruleDesc6", "ruleDesc7", "ruleDesc8"];

    case "award":
      return ["ruleDesc9", "ruleDesc10", "ruleDesc11"];

    case "other":
      return ["ruleDesc12"];
    default:
      return [];
  }
}

function getAwardDesc(status) {
  const obj = {
    rankingDesc: "",
    awardDesc: "",
    awardTitle: "",
    awardInfo: "",
  };

  switch (status) {
    case 0:
      obj.rankingDesc = "awardDesc1";
      obj.awardDesc = "awardDesc2";
      obj.awardTitle = "awardDesc3";
      obj.awardInfo = "awardDesc4";
      break;
    case 1:
      obj.rankingDesc = "awardDesc5";
      obj.awardDesc = "awardDesc6";
      obj.awardTitle = "awardDesc7";
      obj.awardInfo = "awardDesc8";
      break;
    case 2:
      obj.rankingDesc = "awardDesc9";
      obj.awardDesc = "awardDesc10";
      obj.awardTitle = "awardDesc11";
      obj.awardInfo = "awardDesc12";
      break;
  }

  return obj;
}

window.getRule = getRule;
window.getAwardDesc = getAwardDesc;
