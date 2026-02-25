<h1
	align="center"
	style="
		font-family: &quot;Orbitron&quot;, monospace;
		font-size: 3em;
		background: linear-gradient(90deg, #1e90ff, #00c8ff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin-bottom: 0.2em;
	"
>
	JS2WP
</h1>

<p align="center" style="font-size: 1.2em; color: #555">
	Generate WordPress plugins from JavaScript projects effortlessly
</p>

<p align="center" style="margin-top: 0.5em; margin-bottom: 2em">
	<img
		src="https://img.shields.io/npm/v/@emilo/js2wp?color=blue&label=npm"
		alt="npm version"
		style="margin-right: 8px"
	/>
	<img
		src="https://img.shields.io/npm/dm/@emilo/js2wp?color=green&label=downloads"
		alt="downloads"
		style="margin-right: 8px"
	/>
	<img
		src="https://img.shields.io/npm/l/@emilo/js2wp?color=orange&label=license"
		alt="license"
	/>
</p>

<hr />

<h2>Install</h2>

<pre
	style="
		background: #1e1e1e;
		color: #f8f8f2;
		padding: 12px 16px;
		border-radius: 8px;
		font-size: 1.05em;
		overflow-x: auto;
	"
>
npm install @emilo/js2wp
</pre>

<hr />

<h2>Features</h2>

<ul
	style="
		line-height: 1.7em;
		font-family: &quot;Courier New&quot;, monospace;
		color: #333;
		padding-left: 0.5em;
	"
>
	<li>🚀 Generate WordPress plugins automatically from JS projects</li>
	<li>⚙️ Simple configuration file support (.js, .ts, .json, etc.)</li>
	<li>💻 CLI workflow using <code>js2wp build</code></li>
	<li>🧩 Automatic plugin boilerplate creation</li>
	<li>✨ Integrates with modern JavaScript tooling</li>
</ul>

<hr />

<h2>Configuration Schema</h2>

<p>Example <code>js2wp.config.js</code> structure:</p>

<table style="width: 100%; border-collapse: collapse; text-align: left">
	<thead>
		<tr style="background: #1e90ff; color: white">
			<th style="padding: 8px; border: 1px solid #ccc">Field</th>
			<th style="padding: 8px; border: 1px solid #ccc">Type</th>
			<th style="padding: 8px; border: 1px solid #ccc">Description</th>
			<th style="padding: 8px; border: 1px solid #ccc">Optional</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="padding: 8px; border: 1px solid #ccc">template</td>
			<td style="padding: 8px; border: 1px solid #ccc">"menu_page"</td>
			<td style="padding: 8px; border: 1px solid #ccc">
				Which plugin template to generate
			</td>
			<td style="padding: 8px; border: 1px solid #ccc">No</td>
		</tr>
		<tr>
			<td style="padding: 8px; border: 1px solid #ccc">options</td>
			<td style="padding: 8px; border: 1px solid #ccc">
				Record&lt;string, never&gt;
			</td>
			<td style="padding: 8px; border: 1px solid #ccc">
				Extra template-specific options
			</td>
			<td style="padding: 8px; border: 1px solid #ccc">No</td>
		</tr>
		<tr>
			<td style="padding: 8px; border: 1px solid #ccc">headers</td>
			<td style="padding: 8px; border: 1px solid #ccc">Object</td>
			<td style="padding: 8px; border: 1px solid #ccc">
				WordPress plugin headers (name, version, author, etc.)
			</td>
			<td style="padding: 8px; border: 1px solid #ccc">Yes</td>
		</tr>
		<tr>
			<td style="padding: 8px; border: 1px solid #ccc">build</td>
			<td style="padding: 8px; border: 1px solid #ccc">Object</td>
			<td style="padding: 8px; border: 1px solid #ccc">
				Build configuration (e.g., src & output folders)
			</td>
			<td style="padding: 8px; border: 1px solid #ccc">Yes</td>
		</tr>
	</tbody>
</table>
