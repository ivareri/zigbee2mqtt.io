"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[90682],{36256:(a,e,n)=>{n.r(e),n.d(e,{data:()=>s});const s={key:"v-01bfb78c",path:"/guide/configuration/device-availability.html",title:"Device-Availability",lang:"en-US",frontmatter:{sidebarDepth:1},excerpt:"",headers:[{level:2,title:"Availability advanced configuration",slug:"availability-advanced-configuration",children:[]},{level:2,title:"State retrieval",slug:"state-retrieval",children:[]},{level:2,title:"Performance considerations",slug:"performance-considerations",children:[]}],filePathRelative:"guide/configuration/device-availability.md",git:{updatedTime:1638712963e3}}},24293:(a,e,n)=>{n.r(e),n.d(e,{default:()=>t});const s=(0,n(66252).uE)('<h1 id="device-availability" tabindex="-1"><a class="header-anchor" href="#device-availability" aria-hidden="true">#</a> Device-Availability</h1><p>The availability feature checks whether your devices are online. The availability state of a device is published to <code>zigbee2mqtt/[FRIENDLY_NAME]/availability</code> with the payload being <code>online</code> or <code>offline</code>.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># Optional: Enable the availability feature (default = false)</span>\n<span class="token key atrule">availability</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>The availability feature works differently for active and passive devices.</p><ul><li>Active devices (routers or mains powered end devices): by default they have to check-in every 10 minutes. If they don&#39;t, they will be pinged, if that fails the device will be marked as <code>offline</code>.</li><li>Passive devices (everything that is not an active device, mostly battery powered devices): these devices need to check-in every 25 hours, they cannot be pinged so if they don&#39;t they will be marked as <code>offline</code>.</li></ul><p>Note that this timeout is persisted between Zigbee2MQTT restarts. So if you e.g. stop Zigbee2MQTT for longer than 10 minutes, all yours active devices will be marked as <code>offline</code> initially.</p><h2 id="availability-advanced-configuration" tabindex="-1"><a class="header-anchor" href="#availability-advanced-configuration" aria-hidden="true">#</a> Availability advanced configuration</h2><p>Instead of setting <code>availability: true</code> in your <code>configuration.yaml</code> you can provide a more advanced configuration:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># Note: all options are optional</span>\n<span class="token key atrule">availability</span><span class="token punctuation">:</span>\n  <span class="token key atrule">active</span><span class="token punctuation">:</span>\n    <span class="token comment"># Time after which an active device will be marked as offline in</span>\n    <span class="token comment"># minutes (default = 10 minutes)</span>\n    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">10</span>\n  <span class="token key atrule">passive</span><span class="token punctuation">:</span>\n    <span class="token comment"># Time after which a passive device will be marked as offline in</span>\n    <span class="token comment"># minutes (default = 1500 minutes aka 25 hours)</span>\n    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">1500</span>\n\n<span class="token key atrule">devices</span><span class="token punctuation">:</span>\n  <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;my_bulb&#39;</span>\n    <span class="token comment"># Set availablility: false to disable the availability feature for a specific device</span>\n    <span class="token key atrule">availability</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n  <span class="token key atrule">&#39;0x87654321&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;my_switch&#39;</span>\n    <span class="token comment"># Change availibity timeout to 3 minutes for this device only</span>\n    <span class="token key atrule">availability</span><span class="token punctuation">:</span>\n      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">3</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>If you want to enable the availability feature for only certain devices, don&#39;t add <code>availability: true</code> in your <code>configuration.yaml</code> but specify it for that device only, e.g.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">devices</span><span class="token punctuation">:</span>\n  <span class="token key atrule">&#39;0x87654321&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;my_switch&#39;</span>\n    <span class="token comment"># Enable avaiability for just &#39;my_switch&#39;</span>\n    <span class="token key atrule">availability</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="state-retrieval" tabindex="-1"><a class="header-anchor" href="#state-retrieval" aria-hidden="true">#</a> State retrieval</h2><p>When the availability feature is enabled and a device reconnects or announces itself on the network, Zigbee2MQTT will retrieve the state of the device. This is e.g. handy when a bulb turns itself on after being reconnected to mains power. The following attributes will be read: <code>state</code>, <code>brightness</code>, <code>color_temp</code> and <code>color</code>.</p><h2 id="performance-considerations" tabindex="-1"><a class="header-anchor" href="#performance-considerations" aria-hidden="true">#</a> Performance considerations</h2><ul><li>The pinging can be heavy on the coordinator, especially if you are using a CC2530 or CC2531 adapter.</li><li>Higher <code>timeout</code> for active devices results in less pinging so less stress on the coordinator.</li></ul>',15),i={},t=(0,n(83744).Z)(i,[["render",function(a,e){return s}]])},83744:(a,e)=>{e.Z=(a,e)=>{for(const[n,s]of e)a[n]=s;return a}}}]);