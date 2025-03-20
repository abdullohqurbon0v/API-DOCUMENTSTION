/* eslint-disable react/jsx-no-comment-textnodes */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-32 px-4">
      <h1 className="text-3xl font-bold mb-8 ">API Documentation</h1>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="item-1" className="border rounded-lg shadow-sm">
          <AccordionTrigger className="cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold">
            POST /user/login
          </AccordionTrigger>
          <AccordionContent className="px-4 py-6 bg-white">
            <div className="space-y-6">
              <div>
                <p className="mb-2 text-lg font-semibold text-gray-700">
                  Request Body
                </p>
                <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                  <ul className="space-y-2">
                    <li>
                      <span className="text-blue-600">name</span>:{" "}
                      <span className="text-green-600">string</span>{" "}
                      <span className="text-gray-500">
                        // User first name (required)
                      </span>
                    </li>
                    <li>
                      <span className="text-blue-600">lastname</span>:{" "}
                      <span className="text-green-600">string</span>{" "}
                      <span className="text-gray-500">
                        // User last name (required)
                      </span>
                    </li>
                    <li>
                      <span className="text-blue-600">phone_number</span>:{" "}
                      <span className="text-green-600">string</span>{" "}
                      <span className="text-gray-500">
                        // Format: +1234567890 (required)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="mb-2 text-lg font-semibold text-gray-700">
                  Database Schema
                </p>
                <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                  <ul className="space-y-2">
                    <li>
                      <span className="text-blue-600">id</span>:{" "}
                      <span className="text-green-600">number</span>{" "}
                      <span className="text-gray-500">
                        // Unique identifier
                      </span>
                    </li>
                    <li>
                      <span className="text-blue-600">name</span>:{" "}
                      <span className="text-green-600">string</span>{" "}
                      <span className="text-gray-500">
                        // Stored first name
                      </span>
                    </li>
                    <li>
                      <span className="text-blue-600">lastname</span>:{" "}
                      <span className="text-green-600">string</span>{" "}
                      <span className="text-gray-500">// Stored last name</span>
                    </li>
                    <li>
                      <span className="text-blue-600">phone_number</span>:{" "}
                      <span className="text-green-600">string</span>{" "}
                      <span className="text-gray-500">
                        // Verified phone number
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border rounded-lg shadow-sm">
          <AccordionTrigger className="cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold">
            POST /user/verify
          </AccordionTrigger>
          <AccordionContent className="px-4 py-6 bg-white">
            <div className="space-y-6">
              <div>
                <p className="mb-2 text-lg font-semibold text-gray-700">
                  Request Body
                </p>
                <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                  <ul className="space-y-2">
                    <li>
                      <span className="text-blue-600">sms_code</span>:{" "}
                      <span className="text-green-600">number</span>{" "}
                      <span className="text-gray-500">
                        // 6-digit verification code
                      </span>
                    </li>
                    <li>
                      <span className="text-blue-600">phone_number</span>:{" "}
                      <span className="text-green-600">string</span>{" "}
                      <span className="text-gray-500">// Phone to verify</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="mb-2 text-lg font-semibold text-gray-700">
                  Database Schema
                </p>
                <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                  <ul className="space-y-2">
                    <li>
                      <span className="text-blue-600">id</span>:{" "}
                      <span className="text-green-600">number</span>{" "}
                      <span className="text-gray-500">
                        // Verification record ID
                      </span>
                    </li>
                    <li>
                      <span className="text-blue-600">sms_code</span>:{" "}
                      <span className="text-green-600">number</span>{" "}
                      <span className="text-gray-500">
                        // Generated verification code
                      </span>
                    </li>
                    <li>
                      <span className="text-blue-600">phone_number</span>:{" "}
                      <span className="text-green-600">string</span>{" "}
                      <span className="text-gray-500">// Associated phone</span>
                    </li>
                    <li>
                      <span className="text-blue-600">expireAt</span>:{" "}
                      <span className="text-green-600">Date</span>{" "}
                      <span className="text-gray-500">
                        // Code expiration time
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border rounded-lg shadow-sm">
          <AccordionTrigger className="cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold">
            GET /product/
          </AccordionTrigger>
          <AccordionContent className="px-4 py-6 bg-white">
            <div className="space-y-6">
              <div>
                <p className="mb-2 text-lg font-semibold text-gray-700">
                  Response
                </p>
                <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                  <ul className="space-y-2">
                    <li>
                      <span className="text-blue-600">id</span>:{" "}
                      <span className="text-green-600">number</span>{" "}
                      <span className="text-gray-500">
                        // Product identifier
                      </span>
                    </li>
                    <li>
                      <span className="text-blue-600">name</span>:{" "}
                      <span className="text-green-600">string</span>{" "}
                      <span className="text-gray-500">// Product name</span>
                    </li>
                    <li>
                      <span className="text-blue-600">price</span>:{" "}
                      <span className="text-green-600">number</span>{" "}
                      <span className="text-gray-500">
                        // Product price in USD
                      </span>
                    </li>
                    <li>
                      <span className="text-blue-600">stock</span>:{" "}
                      <span className="text-green-600">number</span>{" "}
                      <span className="text-gray-500">
                        // Available quantity
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default page;
