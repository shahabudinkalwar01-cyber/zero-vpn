export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    if (url.pathname === "/api/vpn") {
      const config = `[Interface]
PrivateKey = ${env.WG0_PRIVATE_KEY || "PLACEHOLDER_WG0_KEY"}
Address = 172.16.0.2/32, 2606:4700:110:8801::2/128
DNS = 1.1.1.1, 1.0.0.1
MTU = 1280

[Peer]
PublicKey = bmXOC+FwK564fJF7Ax848p2uofb8pt8BJ6A3I92ndhg=
Endpoint = 162.159.192.1:2408
AllowedIPs = 0.0.0.0/0, ::/0

[Interface]
PrivateKey = ${env.WG1_PRIVATE_KEY || "PLACEHOLDER_WG1_KEY"}
Address = 172.16.0.3/32, 2606:4700:110:8802::2/128
DNS = 1.1.1.1, 1.0.0.1
MTU = 1280

[Peer]
PublicKey = bmXOC+FwK564fJF7Ax848p2uofb8pt8BJ6A3I92ndhg=
Endpoint = 162.159.193.1:2408
AllowedIPs = 0.0.0.0/0, ::/0

[Interface]
PrivateKey = ${env.WG2_PRIVATE_KEY || "PLACEHOLDER_WG2_KEY"}
Address = 172.16.0.4/32, 2606:4700:110:8803::2/128
DNS = 1.1.1.1, 1.0.0.1
MTU = 1280

[Peer]
PublicKey = bmXOC+FwK564fJF7Ax848p2uofb8pt8BJ6A3I92ndhg=
Endpoint = 162.159.194.1:2408
AllowedIPs = 0.0.0.0/0, ::/0
`;
      return new Response(config, {
        headers: {
          "Content-Type": "text/plain",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    return new Response("VITO VPN Backend Active. Access /api/vpn for configuration.", {
      headers: { "Content-Type": "text/plain" }
    });
  }
};
