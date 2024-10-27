import axiosFetch from "../../utils/axiosFetch";

const getApplication = async () => {
  const url = "/applications/@me";
  const application = await axiosFetch(url, { method: "GET" });
  const bot: ApplicationStructure = application.data;
  return bot;
};

export default getApplication;
