import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

const About = () => {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
};

export default About;
