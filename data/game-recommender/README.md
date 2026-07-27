Game Recommender / IGDB 数据维护说明

本文件用于记录 Whisper of the House 游戏推荐系统的日常维护流程。

建议将本文件放到：

data/game-recommender/README.md

1. 数据结构

data/game-recommender/
├── game-seeds.ts
├── game-traits.ts
├── games.ts
├── guide-coverage.ts
├── igdb-games.generated.json
└── README.md

public/images/igdb/covers/
└── {igdbId}-{localId}.jpg

scripts/
├── find-igdb-game.mjs
├── sync-igdb-games.mjs
└── test-igdb.mjs

各文件职责

game-seeds.ts

人工维护。

决定哪些游戏进入推荐池，并保存：

本地稳定 ID；

已确认的 IGDB ID；

IGDB 正式游戏名称。

示例：

{
  id: "terraria",
  igdbId: 1879,
  expectedName: "Terraria",
},

game-traits.ts

人工维护。

保存推荐算法使用的 10 项玩法评分：

exploration
progression
systems
crafting
story
combat
strategy
puzzle
survival
social

评分范围：

0.0 = 基本不存在
1.0 = 很轻
2.0 = 有一些，但不是重点
3.0 = 明显存在
4.0 = 核心体验
5.0 = 定义性体验

每款游戏首次加入推荐池时添加一次，之后通常不用修改。

guide-coverage.ts

人工维护。

告诉推荐器：

这款游戏是否有自己的攻略；

攻略在哪个网站；

应跳转到哪个 Hub；

攻略数量。

主站示例：

"new-game": whisperGuide(
  "/new-game",
  5,
),

第二站示例：

"rubinite": dq7Guide(
  "https://dq7reimagined.com/rubinite/",
  4,
),

没有自己的攻略时，不需要添加。

igdb-games.generated.json

机器生成，禁止手工修改。

包含：

标题；

封面；

平台；

游玩模式；

类型；

主题；

发售日期；

简介；

IGDB URL。

每次运行同步脚本时都会重新生成。

games.ts

自动合并层，通常不需要修改。

它会把：

game-seeds.ts
+ igdb-games.generated.json
+ game-traits.ts
+ guide-coverage.ts

合并成推荐器实际使用的：

GAMES

页面或算法统一读取：

import {
  GAMES,
} from "@/data/game-recommender/games";

2. 首次环境要求

.env.local 必须包含：

IGDB_CLIENT_ID=...
IGDB_CLIENT_SECRET=...

不要把这两个值写进脚本，也不要提交到 Git。

.gitignore 至少应包含：

.env
.env.local
.env*.local
.cache/
*.tsbuildinfo

确认缓存已被忽略：

git check-ignore -v .cache/igdb-access-token.json

3. 添加一款新游戏

日常新增游戏时，按以下顺序操作。

第一步：搜索并确认准确 IGDB ID

在项目根目录运行：

HTTP_PROXY=http://127.0.0.1:7897 \
HTTPS_PROXY=http://127.0.0.1:7897 \
NODE_USE_ENV_PROXY=1 \
node --env-file=.env.local scripts/find-igdb-game.mjs \
  "New Game"

一次也可以搜索多款：

HTTP_PROXY=http://127.0.0.1:7897 \
HTTPS_PROXY=http://127.0.0.1:7897 \
NODE_USE_ENV_PROXY=1 \
node --env-file=.env.local scripts/find-igdb-game.mjs \
  "Game One" \
  "Game Two" \
  "Game Three"

判断正确记录时检查：

Exact title match: yes；

名称完全一致；

发售日期合理；

平台合理；

简介对应正确游戏；

不是 Demo；

不是合集；

不是特别版；

不是非官方移植；

不是同名旧游戏；

DLC 项目必须选择 DLC 自身，而不是本体。

不要猜 IGDB ID。

第二步：追加到 game-seeds.ts

只追加，不要替换旧内容。

{
  id: "new-game",
  igdbId: 123456,
  expectedName: "New Game",
},

三个文件的本地 ID 必须完全一致：

game-seeds.ts
game-traits.ts
guide-coverage.ts

例如统一使用：

the-mound-omen-of-cthulhu

不能在另一个文件中写成：

the-mound

第三步：添加人工 Traits

在 GAME_TRAITS 对象内部追加：

"new-game": {
  exploration: 3.5,
  progression: 4.0,
  systems: 3.5,
  crafting: 2.0,
  story: 3.0,
  combat: 4.0,
  strategy: 3.0,
  puzzle: 1.5,
  survival: 2.5,
  social: 2.0,
},

Traits 不会由 IGDB 自动生成。

原因是 IGDB 的 Genre 和 Theme 无法准确表达：

系统深度；

战斗比重；

长期成长感；

探索强度；

制作比重；

适合怎样的玩家。

第四步：有攻略时补 guide-coverage.ts

主站：

"new-game": whisperGuide(
  "/new-game",
  5,
),

第二站：

"new-game": dq7Guide(
  "https://dq7reimagined.com/new-game/",
  5,
),

没有攻略时跳过。

推荐器仍然可以推荐没有攻略覆盖的游戏：

guideDestination: null
hasGuide: false

第五步：运行 IGDB 同步

HTTP_PROXY=http://127.0.0.1:7897 \
HTTPS_PROXY=http://127.0.0.1:7897 \
NODE_USE_ENV_PROXY=1 \
node --env-file=.env.local scripts/sync-igdb-games.mjs

同步脚本会自动：

读取全部 GAME_SEEDS；

根据准确 IGDB ID 请求数据；

重新生成 JSON；

保留已存在的封面；

只下载新增封面；

输出同步数量。

正常示例：

Syncing 10 IGDB game(s)...
↪ Cover already exists: Stardew Valley
↪ Cover already exists: Terraria
✅ Downloaded cover: New Game
✅ Synced 10/10 game(s)

第六步：验证数据

检查游戏数量：

node -e "
const data = require('./data/game-recommender/igdb-games.generated.json');

console.log({
  gameCount: data.gameCount,
  games: Object.keys(data.games),
});
"

检查封面数量：

find public/images/igdb/covers \
  -type f \
  -name '*.jpg' \
  | wc -l

检查空封面：

find public/images/igdb/covers \
  -type f \
  -name '*.jpg' \
  -size 0

正常情况下，空封面检查没有输出。

第七步：类型检查和构建

npx tsc --noEmit

然后：

npm run build

两个命令都通过，代表：

Seed
+ IGDB 数据
+ 封面
+ Traits
+ 攻略覆盖
+ 最终合并层

全部正常。

4. 批量添加游戏

建议一次处理 10–20 款，而不是每新增一款就同步一次。

推荐流程：

搜索一批 IGDB ID
→ 批量追加 game-seeds.ts
→ 批量补 game-traits.ts
→ 批量检查 guide-coverage.ts
→ 运行一次同步
→ 类型检查
→ 构建
→ Git 提交

5. 快速检查 Traits 是否缺失

把需要检查的本地 ID 放进命令：

for id in \
  terraria \
  elden-ring \
  hollow-knight
do
  grep -q "\"$id\"" data/game-recommender/game-traits.ts \
    && echo "✅ $id" \
    || echo "❌ missing: $id"
done

出现：

❌ missing: hollow-knight

就代表必须在 game-traits.ts 添加该游戏。

6. 哪些文件可以修改

人工维护

game-seeds.ts
game-traits.ts
guide-coverage.ts

机器生成或自动处理

igdb-games.generated.json
public/images/igdb/covers/*
games.ts
.cache/igdb-access-token.json

不要手工编辑生成 JSON。

不要手工下载或重命名 IGDB 封面。

7. 封面文件规则

封面自动保存到：

public/images/igdb/covers/

文件名格式：

{igdbId}-{localId}.jpg

示例：

1879-terraria.jpg
119133-elden-ring.jpg
113112-hades.jpg

页面访问路径：

/images/igdb/covers/1879-terraria.jpg

VS Code 中显示的 U 表示：

Untracked

只是尚未加入 Git，不是错误。

8. 强制重新下载封面

普通同步不会重新下载已经存在的封面。

需要强制重下时：

HTTP_PROXY=http://127.0.0.1:7897 \
HTTPS_PROXY=http://127.0.0.1:7897 \
NODE_USE_ENV_PROXY=1 \
node --env-file=.env.local scripts/sync-igdb-games.mjs --force

仅在以下情况使用：

封面损坏；

IGDB 更换了封面；

本地文件异常；

需要统一刷新图片。

9. 常见报错

Missing IGDB_CLIENT_ID

检查：

.env.local

是否存在：

IGDB_CLIENT_ID
IGDB_CLIENT_SECRET

不要把实际 Secret 发到聊天或提交到 Git。

网络请求失败

当前本机 Node 需要通过代理运行：

HTTP_PROXY=http://127.0.0.1:7897 \
HTTPS_PROXY=http://127.0.0.1:7897 \
NODE_USE_ENV_PROXY=1

确认本地代理端口仍然是：

127.0.0.1:7897

Missing generated IGDB data for game

说明已经把游戏加入 game-seeds.ts，但还没有重新同步。

运行：

HTTP_PROXY=http://127.0.0.1:7897 \
HTTPS_PROXY=http://127.0.0.1:7897 \
NODE_USE_ENV_PROXY=1 \
node --env-file=.env.local scripts/sync-igdb-games.mjs

缺少 Traits

说明 Seed 中存在该游戏，但 game-traits.ts 没有对应本地 ID。

添加一组完整的 10 项评分。

Duplicate local game id

game-seeds.ts 中重复使用了同一个：

id

删除重复项。

Duplicate IGDB ID

两个 Seed 使用了同一个 IGDB ID。

重新确认是否误选了本体、DLC、合集或特别版。

Name mismatch

Seed 中的：

expectedName

与 IGDB 返回的正式名称不一致。

先确认是否选错记录。

只是标点或正式名称差异时，以 IGDB 实际返回的名称更新：

expectedName

MODULE_TYPELESS_PACKAGE_JSON

Node 可能显示类似警告：

[MODULE_TYPELESS_PACKAGE_JSON]

如果同步和构建正常，这个警告暂时可以忽略。

不要仅为了消除警告就贸然在整个项目的 package.json 中添加：

"type": "module"

因为可能影响现有 Next.js 配置和 CommonJS 脚本。

10. Git 提交

提交前检查：

git status --short

不应该看到：

.env.local
.cache/igdb-access-token.json
tsconfig.tsbuildinfo

应该提交：

data/game-recommender/
public/images/igdb/covers/
scripts/
.gitignore

示例：

git add \
  data/game-recommender \
  public/images/igdb/covers \
  scripts \
  .gitignore

git commit -m "Update game recommender data"

11. 可选：添加 npm 快捷命令

可以在 package.json 的 scripts 中加入：

{
  "scripts": {
    "find:igdb": "node --env-file=.env.local scripts/find-igdb-game.mjs",
    "sync:igdb": "node --env-file=.env.local scripts/sync-igdb-games.mjs",
    "check:types": "tsc --noEmit"
  }
}

查询时：

HTTP_PROXY=http://127.0.0.1:7897 \
HTTPS_PROXY=http://127.0.0.1:7897 \
NODE_USE_ENV_PROXY=1 \
npm run find:igdb -- "Terraria" "Elden Ring"

同步时：

HTTP_PROXY=http://127.0.0.1:7897 \
HTTPS_PROXY=http://127.0.0.1:7897 \
NODE_USE_ENV_PROXY=1 \
npm run sync:igdb

12. 最简日常流程

以后新增游戏，只记住下面六步：

1. find-igdb-game.mjs 查询准确 ID
2. game-seeds.ts 追加 Seed
3. game-traits.ts 添加一次 Traits
4. 有攻略则更新 guide-coverage.ts
5. sync-igdb-games.mjs 同步数据和封面
6. tsc + build 验证

不要手改：

igdb-games.generated.json
封面文件名
games.ts
token 缓存