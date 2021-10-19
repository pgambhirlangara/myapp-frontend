import axios from "axios";

const questionUrl = "http://ec2-18-116-199-162.us-east-2.compute.amazonaws.com/api/questions";
const resultUrl = "http://ec2-18-116-199-162.us-east-2.compute.amazonaws.com/api/result";

export const fetchQuestionsData = () => axios.get(questionUrl);
export const fetchResultData = () => axios.get(resultUrl);
