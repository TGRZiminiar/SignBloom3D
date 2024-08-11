import React from "react";
import Searchbar from "../../components/Searchbar";
import FilterTime from "./components/FilterTime";
import FilterStatus from "./components/FilterStatus";
import SelectStatus from "./components/SelectStatus";

export const AdminTicketPage = () => {
    return (
        <div className="flex flex-col items-center mt-10 space-y-8">
            <div className="text-5xl font-bold text-primary-base">
                ปัญหาที่พบ
            </div>
            <div className="w-[642px] lg:w-[57rem] space-y-5">
                <Searchbar />
            </div>
            <div className="flex space-x-2">
                <div className="w-[300px]">
                    <FilterStatus />
                </div>
                <div className="w-[300px]">
                    <FilterTime />
                </div>
            </div>

            <div className="w-[1311px] h-[658px] justify-start items-start inline-flex">
                <div className="w-full">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b-2 border-gray-200">
                                <th className="px-4 py-2 text-center">คำ</th>
                                <th className="px-4 py-2 text-center">หมวดหมู่</th>
                                <th className="px-4 py-2 text-center">ชนิดของคำ</th>
                                <th className="px-4 py-2 text-center">รายละเอียด</th>
                                <th className="px-4 py-2 text-center">สถานะ</th>
                                <th className="px-4 py-2 text-center">วันที่</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="px-4 py-2 text-center">อ</td>
                                <td className="px-4 py-2 text-center">อาหารคาว</td>
                                <td className="px-4 py-2 text-center">คำนาม</td>
                                <td className="px-4 py-2 text-center">นิ้วโป้งกลืนลงไปกับมือ</td>
                                <td className="px-4 py-2 w-40">
                                    <div className="flex justify-center">
                                        <SelectStatus />
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-center">5/8/2567</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr className="border-b">
                                <td className="px-4 py-2 text-center">ปลาช่อน</td>
                                <td className="px-4 py-2 text-center">สัตว์น้ำ</td>
                                <td className="px-4 py-2 text-center">คำนาม</td>
                                <td className="px-4 py-2 text-center">โมเดลโชว์รูปร่างแปลก</td>
                                <td className="px-4 py-2 w-40">
                                    <div className="flex justify-center">
                                        <SelectStatus />
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-center">2/8/2567</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr className="border-b">
                                <td className="px-4 py-2 text-center">กุ้ง</td>
                                <td className="px-4 py-2 text-center">อาหารคาว</td>
                                <td className="px-4 py-2 text-center">คำนาม</td>
                                <td className="px-4 py-2 text-center">พื้นที่ที่ผมอยู่ไม้ได้ใช้ท่านี้ครับ แจ้งจากชุมชน</td>
                                <td className="px-4 py-2 w-40">
                                    <div className="flex justify-center">
                                        <SelectStatus />
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-center">1/8/2567</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
