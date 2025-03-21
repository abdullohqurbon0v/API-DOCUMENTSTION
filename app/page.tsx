/* eslint-disable react/jsx-no-comment-textnodes */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

interface Field {
  name: string;
  type: string;
  comment: string;
}
interface Endpoint {
  endpoint: string;
  queryParams?: Field[];
  requestBody?: Field[];
  dbSchema?: Field[];
  response: Field[];
}

const POST_ENDPOINTS: Endpoint[] = [
  {
    endpoint: "/user/login",
    requestBody: [
      { name: "name", type: "string", comment: "User first name (required)" },
      {
        name: "lastname",
        type: "string",
        comment: "User last name (required)",
      },
      {
        name: "phone_number",
        type: "string",
        comment: "Format: +1234567890 (required)",
      },
    ],
    dbSchema: [
      { name: "id", type: "number", comment: "Unique identifier" },
      { name: "name", type: "string", comment: "Stored first name" },
      { name: "lastname", type: "string", comment: "Stored last name" },
      {
        name: "phone_number",
        type: "string",
        comment: "Verified phone number",
      },
      {
        name: "createdAt",
        type: "Date",
        comment: "Account creation timestamp",
      },
    ],
    response: [
      { name: "success", type: "boolean", comment: "Operation success status" },
      { name: "token", type: "string", comment: "Authentication token" },
      { name: "userId", type: "number", comment: "User identifier" },
      { name: "message", type: "string", comment: "Response message" },
    ],
  },
  {
    endpoint: "/user/verify",
    requestBody: [
      {
        name: "sms_code",
        type: "number",
        comment: "6-digit verification code (required)",
      },
      {
        name: "phone_number",
        type: "string",
        comment: "Phone to verify (required)",
      },
    ],
    dbSchema: [
      { name: "id", type: "number", comment: "Verification record ID" },
      {
        name: "sms_code",
        type: "number",
        comment: "Generated verification code",
      },
      { name: "phone_number", type: "string", comment: "Associated phone" },
      { name: "expireAt", type: "Date", comment: "Code expiration time" },
      {
        name: "attempts",
        type: "number",
        comment: "Number of verification attempts",
      },
    ],
    response: [
      {
        name: "success",
        type: "boolean",
        comment: "Verification success status",
      },
      {
        name: "verified",
        type: "boolean",
        comment: "Phone verification status",
      },
      { name: "message", type: "string", comment: "Response message" },
    ],
  },
  {
    endpoint: "/product/create",
    requestBody: [
      {
        name: "product_name",
        type: "string",
        comment: "Product title (required)",
      },
      {
        name: "product_images",
        type: "string[]",
        comment: "Array of image URLs (required)",
      },
      {
        name: "price",
        type: "number",
        comment: "Product price in USD (required)",
      },
      {
        name: "category",
        type: "string",
        comment: "Product category (required)",
      },
      {
        name: "description",
        type: "string",
        comment: "Product description (optional)",
      },
      { name: "type", type: "string", comment: "Product type (optional)" },
      {
        name: "stock",
        type: "number",
        comment: "Available quantity (required)",
      },
    ],
    dbSchema: [
      { name: "id", type: "number", comment: "Unique identifier" },
      { name: "product_name", type: "string", comment: "Stored product name" },
      {
        name: "product_images",
        type: "string[]",
        comment: "Array of stored image URLs",
      },
      { name: "price", type: "number", comment: "Stored price" },
      { name: "category", type: "string", comment: "Stored category" },
      { name: "description", type: "string", comment: "Stored description" },
      { name: "type", type: "string", comment: "Stored product type" },
      { name: "stock", type: "number", comment: "Current stock quantity" },
      { name: "createdAt", type: "Date", comment: "Creation timestamp" },
    ],
    response: [
      { name: "success", type: "boolean", comment: "Operation success status" },
      {
        name: "productId",
        type: "number",
        comment: "Created product identifier",
      },
      { name: "message", type: "string", comment: "Response message" },
    ],
  },
];

const GET_ENDPOINTS: Endpoint[] = [
  {
    endpoint: "/product/",
    queryParams: [
      { name: "id", type: "number", comment: "Product ID (optional)" },
      {
        name: "category",
        type: "string",
        comment: "Filter by category (optional)",
      },
    ],
    response: [
      { name: "id", type: "number", comment: "Product identifier" },
      { name: "name", type: "string", comment: "Product name" },
      { name: "price", type: "number", comment: "Product price in USD" },
      { name: "stock", type: "number", comment: "Available quantity" },
      { name: "category", type: "string", comment: "Product category" },
      { name: "images", type: "string[]", comment: "Array of image URLs" },
    ],
  },
];

const PUT_ENDPOINTS: Endpoint[] = [
  {
    endpoint: "/user/update",
    queryParams: [
      { name: "id", type: "number", comment: "User ID (required)" },
    ],
    requestBody: [
      { name: "name", type: "string", comment: "New first name (optional)" },
      { name: "lastname", type: "string", comment: "New last name (optional)" },
      {
        name: "phone_number",
        type: "string",
        comment: "New phone number (optional)",
      },
      {
        name: "email",
        type: "string",
        comment: "New email address (optional)",
      },
    ],
    dbSchema: [
      { name: "id", type: "number", comment: "Unique identifier" },
      { name: "name", type: "string", comment: "Updated first name" },
      { name: "lastname", type: "string", comment: "Updated last name" },
      { name: "phone_number", type: "string", comment: "Updated phone number" },
      { name: "email", type: "string", comment: "Updated email" },
      { name: "updatedAt", type: "Date", comment: "Last update timestamp" },
    ],
    response: [
      { name: "success", type: "boolean", comment: "Update success status" },
      { name: "userId", type: "number", comment: "Updated user identifier" },
      { name: "message", type: "string", comment: "Response message" },
    ],
  },
];

const DELETE_ENDPOINTS: Endpoint[] = [
  {
    endpoint: "/user/delete",
    queryParams: [
      { name: "id", type: "number", comment: "User ID to delete (required)" },
    ],
    dbSchema: [
      { name: "id", type: "number", comment: "Unique identifier" },
      { name: "deletedAt", type: "Date", comment: "Deletion timestamp" },
      {
        name: "deletedBy",
        type: "number",
        comment: "ID of user who performed deletion (optional)",
      },
    ],
    response: [
      { name: "success", type: "boolean", comment: "Deletion success status" },
      { name: "userId", type: "number", comment: "Deleted user identifier" },
      { name: "message", type: "string", comment: "Response message" },
    ],
  },
];

// Компонент Page остается без изменений
const Page: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-32 px-4">
      <h1 className="text-3xl font-bold mb-8">API Documentation</h1>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {/* POST Endpoints */}
        {POST_ENDPOINTS.map((item, index) => (
          <AccordionItem
            key={`post-${index}`}
            value={`post-${index}`}
            className="border rounded-lg shadow-sm"
          >
            <AccordionTrigger className="cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold">
              POST {item.endpoint}
            </AccordionTrigger>
            <AccordionContent className="px-4 py-6 bg-white">
              <div className="space-y-6">
                {item.requestBody && (
                  <div>
                    <p className="mb-2 text-lg font-semibold text-gray-700">
                      Request Body
                    </p>
                    <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                      <ul className="space-y-2">
                        {item.requestBody.map((field, idx) => (
                          <li key={idx}>
                            <span className="text-blue-600">{field.name}</span>:{" "}
                            <span className="text-green-600">{field.type}</span>{" "}
                            <span className="text-gray-500">
                              // {field.comment}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {item.dbSchema && (
                  <div>
                    <p className="mb-2 text-lg font-semibold text-gray-700">
                      Database Schema
                    </p>
                    <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                      <ul className="space-y-2">
                        {item.dbSchema.map((field, idx) => (
                          <li key={idx}>
                            <span className="text-blue-600">{field.name}</span>:{" "}
                            <span className="text-green-600">{field.type}</span>{" "}
                            <span className="text-gray-500">
                              // {field.comment}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                <div>
                  <p className="mb-2 text-lg font-semibold text-gray-700">
                    Response
                  </p>
                  <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                    <ul className="space-y-2">
                      {item.response.map((field, idx) => (
                        <li key={idx}>
                          <span className="text-blue-600">{field.name}</span>:{" "}
                          <span className="text-green-600">{field.type}</span>{" "}
                          <span className="text-gray-500">
                            // {field.comment}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}

        {/* GET Endpoints */}
        {GET_ENDPOINTS.map((item, index) => (
          <AccordionItem
            key={`get-${index}`}
            value={`get-${index}`}
            className="border rounded-lg shadow-sm"
          >
            <AccordionTrigger className="cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold">
              GET {item.endpoint}
            </AccordionTrigger>
            <AccordionContent className="px-4 py-6 bg-white">
              <div className="space-y-6">
                {item.queryParams && (
                  <div>
                    <p className="mb-2 text-lg font-semibold text-gray-700">
                      Query Parameters
                    </p>
                    <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                      <ul className="space-y-2">
                        {item.queryParams.map((field, idx) => (
                          <li key={idx}>
                            <span className="text-blue-600">{field.name}</span>:{" "}
                            <span className="text-green-600">{field.type}</span>{" "}
                            <span className="text-gray-500">
                              // {field.comment}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                <div>
                  <p className="mb-2 text-lg font-semibold text-gray-700">
                    Response
                  </p>
                  <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                    <ul className="space-y-2">
                      {item.response.map((field, idx) => (
                        <li key={idx}>
                          <span className="text-blue-600">{field.name}</span>:{" "}
                          <span className="text-green-600">{field.type}</span>{" "}
                          <span className="text-gray-500">
                            // {field.comment}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}

        {/* PUT Endpoints */}
        {PUT_ENDPOINTS.map((item, index) => (
          <AccordionItem
            key={`put-${index}`}
            value={`put-${index}`}
            className="border rounded-lg shadow-sm"
          >
            <AccordionTrigger className="cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold">
              PUT {item.endpoint}
            </AccordionTrigger>
            <AccordionContent className="px-4 py-6 bg-white">
              <div className="space-y-6">
                {item.queryParams && (
                  <div>
                    <p className="mb-2 text-lg font-semibold text-gray-700">
                      Query Parameters
                    </p>
                    <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                      <ul className="space-y-2">
                        {item.queryParams.map((field, idx) => (
                          <li key={idx}>
                            <span className="text-blue-600">{field.name}</span>:{" "}
                            <span className="text-green-600">{field.type}</span>{" "}
                            <span className="text-gray-500">
                              // {field.comment}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {item.requestBody && (
                  <div>
                    <p className="mb-2 text-lg font-semibold text-gray-700">
                      Request Body
                    </p>
                    <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                      <ul className="space-y-2">
                        {item.requestBody.map((field, idx) => (
                          <li key={idx}>
                            <span className="text-blue-600">{field.name}</span>:{" "}
                            <span className="text-green-600">{field.type}</span>{" "}
                            <span className="text-gray-500">
                              // {field.comment}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {item.dbSchema && (
                  <div>
                    <p className="mb-2 text-lg font-semibold text-gray-700">
                      Database Schema
                    </p>
                    <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                      <ul className="space-y-2">
                        {item.dbSchema.map((field, idx) => (
                          <li key={idx}>
                            <span className="text-blue-600">{field.name}</span>:{" "}
                            <span className="text-green-600">{field.type}</span>{" "}
                            <span className="text-gray-500">
                              // {field.comment}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                <div>
                  <p className="mb-2 text-lg font-semibold text-gray-700">
                    Response
                  </p>
                  <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                    <ul className="space-y-2">
                      {item.response.map((field, idx) => (
                        <li key={idx}>
                          <span className="text-blue-600">{field.name}</span>:{" "}
                          <span className="text-green-600">{field.type}</span>{" "}
                          <span className="text-gray-500">
                            // {field.comment}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}

        {/* DELETE Endpoints */}
        {DELETE_ENDPOINTS.map((item, index) => (
          <AccordionItem
            key={`delete-${index}`}
            value={`delete-${index}`}
            className="border rounded-lg shadow-sm"
          >
            <AccordionTrigger className="cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold">
              DELETE {item.endpoint}
            </AccordionTrigger>
            <AccordionContent className="px-4 py-6 bg-white">
              <div className="space-y-6">
                {item.queryParams && (
                  <div>
                    <p className="mb-2 text-lg font-semibold text-gray-700">
                      Query Parameters
                    </p>
                    <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                      <ul className="space-y-2">
                        {item.queryParams.map((field, idx) => (
                          <li key={idx}>
                            <span className="text-blue-600">{field.name}</span>:{" "}
                            <span className="text-green-600">{field.type}</span>{" "}
                            <span className="text-gray-500">
                              // {field.comment}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {item.dbSchema && (
                  <div>
                    <p className="mb-2 text-lg font-semibold text-gray-700">
                      Database Schema
                    </p>
                    <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                      <ul className="space-y-2">
                        {item.dbSchema.map((field, idx) => (
                          <li key={idx}>
                            <span className="text-blue-600">{field.name}</span>:{" "}
                            <span className="text-green-600">{field.type}</span>{" "}
                            <span className="text-gray-500">
                              // {field.comment}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                <div>
                  <p className="mb-2 text-lg font-semibold text-gray-700">
                    Response
                  </p>
                  <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                    <ul className="space-y-2">
                      {item.response.map((field, idx) => (
                        <li key={idx}>
                          <span className="text-blue-600">{field.name}</span>:{" "}
                          <span className="text-green-600">{field.type}</span>{" "}
                          <span className="text-gray-500">
                            // {field.comment}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Page;
