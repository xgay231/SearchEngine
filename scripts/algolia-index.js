const algoliasearch = require('algoliasearch');
const fs = require('fs');
const path = require('path');

// 替换为您的 Algolia 凭据
const ALGOLIA_APP_ID = '948WZAR6HZ';
const ALGOLIA_ADMIN_API_KEY = '79129a6b9214c732d7d68aea973c9e06';
const ALGOLIA_INDEX_NAME = 'search_engine';

// 初始化 Algolia 客户端
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY);
const index = client.initIndex(ALGOLIA_INDEX_NAME);

// 替换为您的 Markdown 文件目录
const contentDir = './src';

async function indexContent() {
    traverseDirectory(contentDir);
}

function traverseDirectory(dirPath) {
    const entries = fs.readdirSync(dirPath);

    for (const entry of entries) {
        const entryPath = path.join(dirPath, entry);

        if (entryPath === path.join(contentDir, 'projects', 'main')) {
            console.log(`Skipping directory: ${entryPath}`);
            continue; // 跳过当前循环
        }
        if (entryPath === path.join(contentDir, 'examples', 'main')) {
            console.log(`Skipping directory: ${entryPath}`);
            continue; // 跳过当前循环
        }

        const stats = fs.statSync(entryPath);

        if (stats.isDirectory()) {
            // 递归遍历子文件夹
            traverseDirectory(entryPath);
        } else if (stats.isFile() && path.extname(entryPath) === '.md') {
            // 处理 Markdown 文件
            indexMarkdownFile(entryPath);
        }
    }
}

async function indexMarkdownFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // 从 Markdown 文件中提取数据
    const { title, content, tag } = extractDataFromMarkdown(fileContent);

    // 创建 Algolia 对象
    const record = {
        objectID: filePath, // 使用文件路径作为 objectID
        title: title, // 添加 title 字段
        content: content, // 添加 content 字段
        tag: tag,  // 添加 tag 字段
    };

    // 添加到 Algolia 索引
    try {
        await index.saveObject(record);
        console.log(`Indexed: ${filePath}`);
    } catch (error) {
        console.error(`Error indexing ${filePath}:`, error);
    }
}

function extractDataFromMarkdown(markdownContent) {
    // 提取元数据
    const metadataMatch = markdownContent.match(/---\n([\s\S]*?)\n---/);
    const metadata = metadataMatch ? metadataMatch[1] : '';
    const title = metadata.match(/title\s*:\s*"(.*?)"/)?.[1] || '';
    const tag = metadata.match(/tag\s*:\s*"(.*?)"/)?.[1] || '';

    // 提取内容
    const content = markdownContent.split('---')[2].trim();

    return {
        title,
        tag,
        content,
    };
}

// 执行索引操作
indexContent();