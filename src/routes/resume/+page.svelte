<script>
	import Timeline from '$lib/components/timeline.svelte';
	import TimelineItem from '$lib/components/timeline-item.svelte';
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>履歷 - Michael Tsai</title>
</svelte:head>

<section class="max-w-1100px mx-auto flex space-x-12px py-40px px-20px md:p-40px ">
	<div
		class="flex-shrink-0 flex-grow-0 bg-white rounded-t-8px shadow-md h-80px
		fixed z-10 bottom-0 top-unset left-0 right-0 flex items-center 
		md:basis-1/4 md:sticky md:top-104px md:self-start md:rounded-8px md:h-auto"
	>
		<ul class="list-circle list-inside text-lg font-600 flex justify-between w-full px-20px md:block md:px-8px md:p-12px">
			<li>
				<a href="#summary">簡介</a>
			</li>
			<li>
				<a href="#skill">技能</a>
			</li>
			<li>
				<a href="#work-experience">經歷</a>
			</li>
			<li>
				<a href="#education">學歷</a>
			</li>
		</ul>
	</div>

	<div class="basis-full md:basis-3/4 flex-shrink flex-grow-0 space-y-20px">
		<div id="summary" class="p-24px bg-white rounded-8px shadow-md scroll-mt-104px">
			<h2>
				<a href="#summary">簡介</a>
			</h2>
			<ul class="list-square">
				<li>5年以上網頁前端開發經驗，主要為前端開發，少許後端開發經驗</li>
			</ul>
		</div>

		<div id="skill" class="p-24px bg-white rounded-8px shadow-md scroll-mt-104px">
			<h2>
				<a href="#skill">程式語言與技能</a>
			</h2>
			<ul class="list-square flex flex-col space-y-8px">
				<li>
					擅長：
					<ul class="list-circle pl-20px">
						<li><code>JavaScript</code> / <code>TypeScript</code></li>
						<li><code>React.js</code></li>
						<li>
							<code>CSS</code> / <code>SASS</code> / <code>TailwindCSS</code> / <code>UnoCSS</code>
							/ <code>styled-components</code>
						</li>
					</ul>
				</li>
				<li>
					其他技能：
					<ul class="list-circle pl-20px">
						<li><code>Vue.js</code></li>
						<li><code>Svelte.js</code></li>
						<li><code>Go</code></li>
						<li><code>C#</code></li>
						<li><code>SQL</code></li>
						<li><code>Docker</code></li>
					</ul>
				</li>
			</ul>
		</div>

		<div id="work-experience" class="p-24px bg-white rounded-8px shadow-md scroll-mt-104px">
			<h2>
				<a href="#work-experience">工作經歷</a>
			</h2>
			<Timeline>
				<TimelineItem title="前端工程師 - 宇泰華科技股份有限公司" date="2022/12 - 現在">
					<ul class="list-disc">
						<li>
							使用 <code>React.js</code> 開發及維護
							<a
								href="https://playsee.co/"
								target="_blank"
								rel="noopener nofollow noreferrer"
								class="text-fuchsia-600 hover:underline">Playsee</a
							> 平台
						</li>
						<li>遷移 <code>styled-components</code> 到 <code>TailwindCSS</code></li>
					</ul>
				</TimelineItem>
				<TimelineItem title="後端工程師 - 香港商宏焰有限公司" date="2022/06 - 2022/11">
					<ul class="list-disc">
						<li>使用 ASP.NET Core / .NET Core / SQL Server 開發 CRM 系統</li>
						<li>串接外部系統 API</li>
						<li>串接 Elasticsearch 導入系統搜尋功能，包含權限控制</li>
						<li>使用 Azure Logic App 建立和執行自動化工作流程</li>
						<li>開發及維護客製化表單系統</li>
					</ul>
				</TimelineItem>
				<TimelineItem title="前端工程師 - 香港商宏焰有限公司" date="2019/04 - 2022/06">
					<ul class="list-disc">
						<li>使用 React / Redux 開發 CRM 系統</li>
						<li>開發元件拖放排版系統</li>
						<li>開發及維護 Low-Code 客製化 表單/頁面 系統</li>
						<li>使用 SASS 管理網站樣式及主題</li>
						<li>重構程式碼，使程式執行效率提升</li>
						<li>導入 Jest 測試框架，撰寫單元測試</li>
						<li>使用 Azure DevOps 打包佈署程式碼</li>
					</ul>
				</TimelineItem>
				<TimelineItem title="前端工程師 - 巧禾數位設計" date="2018/05 - 2019/03">
					<ul class="list-disc">
						<li>建立 Webpack 模板改善開流程</li>
						<li>使用 SASS 管理樣式</li>
						<li>與 PM 、UI Designer、Back-end Developer 協作經驗豐富</li>
						<li>使用 Vue.js / Nuxt.js 開發募資網站</li>
						<li>與 UI Designer 配合建立官網，包含 RWD 、 動畫特效</li>
					</ul>
				</TimelineItem>
			</Timeline>
		</div>

		<div id="education" class="p-24px bg-white rounded-8px shadow-md scroll-mt-104px">
			<h2>
				<a href="#education">學歷</a>
			</h2>
			<p>
				國立彰化師範大學 <strong>數學系</strong>學士
			</p>
		</div>
	</div>
</section>

<style>
	h2 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 6px;
	}

	ul {
		list-style-position: inside;
		padding-left: 20px;
	}
</style>
