# Next.js + Subtrace

This repo shows how to add [Subtrace](https://subtrace.dev) to a sample Next.js app.
Subtrace connects your server to Chrome DevTools so that you can inspect the status,
headers, payload, and latency of each request.

With Subtrace, you can debug your production app way faster.

Download Subtrace on your machine:

```bash
curl -fSLO "https://subtrace.dev/download/$(uname -s)/$(uname -m)/subtrace" && chmod +x ./subtrace
```

Clone this repo, and start the Next.js app with Subtrace.

```bash
npm install
./subtrace run -- npm run dev
```

Open the `subt.link` URL that shows up in your terminal to go to the Subtrace dashboard:

![image](https://github.com/user-attachments/assets/215a92a5-1afe-4ca1-b1ba-5d804415eea7)

That's it! You can now visit [localhost:3000](localhost:3000) and make requests
to the Next.js server that show up on the Subtrace dashboard in realtime.
