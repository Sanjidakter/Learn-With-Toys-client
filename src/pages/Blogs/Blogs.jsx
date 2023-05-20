import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
  useTitle('LWT|Blogs');

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Blogs</h2>

        <div className="bg-violet-600 text-white p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4">What is an access token and refresh token?</h3>
          <p className="text-lg mb-4">
            An access token is a security credential used to authenticate and authorize a user's access to protected resources
            in a system. It is typically a string that is sent with each request to the server to identify the user. Access tokens
            have a short expiration time to enhance security.
          </p>
          <p className="text-lg">
            A refresh token is a long-lived token used to obtain a new access token once the previous one expires. It is securely
            stored on the client-side and sent to the server to request a new access token when needed, without requiring the user
            to log in again.
          </p>
        </div>

        <div className="bg-violet-600 text-white p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4">Compare SQL and NoSQL databases</h3>
          <p className="text-lg mb-4">
            SQL (Structured Query Language) databases are relational databases that store data in tables with predefined schemas.
            They use SQL for querying and manipulating data, and they provide ACID (Atomicity, Consistency, Isolation, Durability)
            properties. SQL databases are suitable for structured data and complex relationships.
          </p>
          <p className="text-lg">
            NoSQL (Not only SQL) databases are non-relational databases that store data in flexible, schema-less formats like
            key-value pairs, documents, columnar, or graph structures. They offer high scalability, horizontal scaling, and flexible
            schemas. NoSQL databases are suitable for unstructured or semi-structured data and can handle large amounts of data
            efficiently.
          </p>
        </div>

        <div className="bg-violet-600 text-white p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4">What is Express.js? What is Nest.js?</h3>
          <p className="text-lg mb-4">
            Express.js is a popular and minimalistic web framework for Node.js. It provides a robust set of features for building
            web applications and APIs, including routing, middleware support, template engines, and HTTP utility methods. Express.js
            is known for its simplicity and flexibility, making it a popular choice for building web servers and APIs with Node.js.
          </p>
          <p className="text-lg">
            Nest.js is a progressive and opinionated framework for building scalable and maintainable server-side applications. It is
            built with TypeScript and uses Express.js under the hood. Nest.js combines elements from various frameworks and patterns
            to provide a cohesive development experience, including dependency injection, modular architecture, decorators, and a
            powerful CLI. It is well-suited for building enterprise-grade applications with a focus on structure and maintainability.
          </p>
        </div>

        <div className="bg-violet-600 text-white p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4">What is MongoDB aggregate and how does it work?</h3>
          <p className="text-lg mb-4">
            MongoDB aggregate is a powerful feature of the MongoDB database that allows you to perform complex data processing and
            analysis operations on the documents in a collection. It provides a way to group, filter, transform, and project data,
            similar to the SQL's "GROUP BY" and "SELECT" operations.
          </p>
          <p className="text-lg">
            The aggregate pipeline in MongoDB consists of multiple stages, each representing a specific operation on the data. These
            stages can include operations like $match, $group, $sort, $project, $lookup, and more. Each stage takes input from the
            previous stage and produces output that can be further processed by subsequent stages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
