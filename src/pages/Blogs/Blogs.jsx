import { useTitle } from "../../hooks/useTitle/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="py-12 min-h-screen">
      <h1 className="font-bold text-3xl text-center my-4">Add a new Toy</h1>
      <div className="px-8 space-y-4">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 glass rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is an access token and refresh token? <br /> How do they work
            and where should we store them on the client-side?
          </div>
          <div className="collapse-content">
            <p>
              JWT tokens are mainly of 2 types: access token and refresh token.
              tokens authorize the user's validity. However, these tokens are
              different in terms of their use case scenario.
              <br />
              Access token is a short-period token, which is active for a short
              amount of time in comparison to a refresh token.
              <br />
              Refresh token, on the other hand, is a long-period active token.
              refresh token can also be expired. when the access token expires,
              the refresh token refreshes the expiratory period of an access
              token. In the case of storage, both of the tokens can be stored in
              local storage and HTTP-only-cookies. however, the local stage is
              vulnerable in case of security purposes. XSS can decode the tokens
              to get access to them. HTTP-only-cookies is also vulnerable,
              however, it is a little bit more secure than local storage.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 glass rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What are the difference between SQL and NoSQL databases?
          </div>
          <div className="collapse-content">
            <p>
              SQL: <br /> a. SQL database is a classic way of storing mass data,
              sql uses horizontal records just like Excel spreadsheets. <br />{" "}
              b. SQL-type data falls into the category of relational database
              systems. <br /> c. structurally SQL is a static database. <br />{" "}
              d. relational database system allows complex data modeling.
              <br />
              NoSQL: <br /> a. NoSQL comparatively new way of storing data in
              the database. <br /> b. NoSQL falls in the category of document
              style data paradigm. <br /> c. NoSQL is a dynamic database <br />{" "}
              d. lake of relational activity makes it hard to achieve complex
              data modeling. <br /> e. mongoose wrap and query system somehow
              overcome the lack of relational database paradigm.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 glass rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is express js? What is Nest JS?
          </div>
          <div className="collapse-content">
            <p>
              express js: is a back-end application framework base on Node.js
              run of JavaScript. express.js developers to write robust code to
              build mobile applications, static and single-page applications.
              easy to use web API can be write with the help of express.js
              <br />
              Nest.js: <br /> nest.js is like express.js, a backend server-side
              scripting language. however, nest.js have some advantages over
              express.js. <br /> a. Modular architecture provides nest.js to
              make nested and modular server-side codes that are easily
              handlable. <br /> b. TypeScript support gives nest.js write
              strongly type server codes.
              <br /> c. dependency Injection, strong community, and scalability
              gives nest js long-term support and future proving.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 glass rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is MongoDB aggregate and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              The aggregation framework in MongoDB consists of a pipeline of
              stages, where each stage performs a specific operation on the
              data. These stages are applied sequentially, and the output of
              each stage serves as the input for the next stage in the pipeline.{" "}
              <br />
              The aggregation framework provides powerful operators and
              expressions to perform operations like arithmetic calculations,
              conditional expressions, array manipulation, date manipulation,
              and more. It also supports pipeline operators like $group,
              $project, $match, and $sort, which allow you to perform advanced
              data processing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
