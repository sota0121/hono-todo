# ToDo App by honojs 🔥

## Overview

- This is a sample application to demonstrate the use of Honojs in a real-world application.

## Stack

- Web Application Framework:
  - [honojs](https://github.com/honojs/hono)
- CDN Edge Server:
  - [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- Deployment Tool:
  - [wrangler](https://developers.cloudflare.com/workers/wrangler/)


## References

[Hono + Cloudflare Workers で REST API を作ってみよう](https://zenn.dev/azukiazusa/articles/hono-cloudflare-workers-rest-api)

en: [Create a REST API with Hono and Cloudflare Workers](https://zenn.dev/azukiazusa/articles/hono-cloudflare-workers-rest-api)


### This article contains something to be updated.

1. The latest version wrangler is `v3.x.x`. The article uses `v2.x.x`.
2. `wrangler init` is deprecated now. Use `npm create cloudflare\@2 -y -- <project-name> --wrangler-defaults` instead.

```bash
# This is the warning message when using `wrangler init` with the latest version.

wrangler init -y hono-todo
 ⛅️ wrangler 3.28.1
-------------------
Using npm as package manager.
▲ [WARNING] The `init` command is no longer supported. Please use `npm create cloudflare\@2 -y -- hono-todo --wrangler-defaults` instead.

  The `init` command will be removed in a future version.


Running `npm create cloudflare\@2 -y -- hono-todo --wrangler-defaults`...
```

## Debugging

https://blog.cloudflare.com/debugging-cloudflare-workers

1. setup `.vscode/launch.json` to debug the worker.
2. start `wrangler dev` to run the worker locally.
3. attach the debugger to the worker. ( with select `Wrangler` in the debug panel. )

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
  "name": "Wrangler",
  "type": "node",
  "request": "attach",
  "port": 8787,
  "cwd": "/",
  "resolveSourceMapLocations": null,
  "attachExistingChildren": false,
  "autoAttachChildProcesses": false
    }
  ]
}
```

## API Request with basic authentication

- e.g.
  - Username: `user`
  - Password: `password`

```json
// Rules
headers: {
  "Authorization": "Basic $Base64EncodedUsername:$Base64EncodedPassword"
}

// Example
headers: {
  "Authorization": "Basic dXNlcg==:cGFzc3dvcmQ="
}
```



## Cloudflare Workers and hono TIPS

### Environment Variables

- https://zenn.dev/kunimasu/articles/9c69b4b50e1737
- https://developers.cloudflare.com/workers/configuration/environment-variables/
- https://hono.dev/getting-started/cloudflare-workers#bindings

