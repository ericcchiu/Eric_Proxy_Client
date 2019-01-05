module.exports = {
  apps: [
    {
      name: "proxyClient",
      script: "./server.js"
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-18-223-115-68.us-east-2.compute.amazonaws.com",
      key: "~/.ssh/projectView.pem",
      ref: "origin/master",
      repo: "git@github.com:ericcchiu/Eric_Proxy_Client.git",
      path: "/home/ubuntu/proxyClient",
      "post-deploy":
        "npm install && npm run webpack &&pm2 startOrRestart ecosystem.config.js"
    }
  }
};
