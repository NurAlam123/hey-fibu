import type { Response } from "express";

const todo = async (res: Response, data: any) => {
    console.log(data[0].options)
    return 0;
}
export default todo;