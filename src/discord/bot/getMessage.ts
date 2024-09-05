import axiosFetch from "../../utils/axiosFetch";

const getMessage = async (token: string, message_id: string = "") => {
  const APP_ID = process.env.APP_ID;
  const url = `/webhooks/${APP_ID}/${token}/messages/${
    message_id ? message_id : "@original"
  }`;

  const res = await axiosFetch(url, {
    method: "GET",
    baseURL: "https://discord.com/api/",
  });
  return {
    status: res.status,
    data: res.data,
  };
};

export default getMessage;
