# Next.js + Subtrace

This repo shows how to add [Subtrace](https://subtrace.dev) to a sample Next.js app.
Subtrace connects your server to Chrome DevTools so that you can inspect the status,
headers, payload, and latency of each request.

With Subtrace, you can debug your production app way faster.

Clone this repo, and download Subtrace on your machine:

```bash
curl -fSLO "https://subtrace.dev/download/$(uname -s)/$(uname -m)/subtrace" && chmod +x ./subtrace
```

Get a `SUBTRACE_TOKEN` from the Subtrace [dashboard](https://subtrace.dev/dashboard) and set it as
an environment variable.

```bash
# get a tracer token for free at https://subtrace.dev/dashboard
export SUBTRACE_TOKEN=subt_...xxxxx
```

Start the Next.js app with Subtrace.

```bash
npm install
./subtrace run -- npm run dev
```

That's it! You can now visit [localhost:3000](localhost:3000) and make requests
to the Next.js server that show up on the Subtrace [dashboard](https://subtrace.dev/dashboard)
in realtime.
