const fs = require("fs");
const path = require("path");
const readline = require("readline");

const templateHandlers = {
  Create: require("./template/handler/templateCreateHandler"),
  Delete: require("./template/handler/templateDeleteHandler"),
  GetAll: require("./template/handler/templateGetAllHandler"),
  GetDetail: require("./template/handler/templateGetDetailHandler"),
  Update: require("./template/handler/templateUpdateHandler"),
};

const templateRequests = {
  Create: require("./template/request/templateCreateRequest"),
  Delete: require("./template/request/templateDeleteRequest"),
  GetAll: require("./template/request/templateGetAllRequest"),
  GetDetail: require("./template/request/templateGetDetailRequest"),
  Update: require("./template/request/templateUpdateRequest"),
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Tạo file từ template
 */
function generateFile(templateFunction, fileName, tableName, location, prefix, suffix, filePath) {
  try {
    const content = templateFunction(fileName, tableName, location);
    const fileFullPath = path.join(filePath, `${prefix}${fileName}${suffix}.ts`);
    fs.writeFileSync(fileFullPath, content, "utf8");
    console.log(`✅ Created: ${fileFullPath}`);
  } catch (error) {
    console.error(`❌ Error generating ${prefix}${fileName}${suffix}:`, error);
  }
}

/**
 * Tạo tất cả file cần thiết cho một module API và Constants.
 */
function generateFiles(fileName, tableName, location, apiPath, constantsPath) {
  Object.entries(templateHandlers).forEach(([prefix, templateFunction]) => {
    generateFile(templateFunction, fileName, tableName, location, prefix, "Handler", apiPath);
  });

  Object.entries(templateRequests).forEach(([prefix, templateFunction]) => {
    generateFile(templateFunction, fileName, tableName, location, prefix, "Request", constantsPath);
  });

  console.log(`🎉 Completed generation for '${fileName}'`);
  rl.close();
}

rl.question("Chọn thư mục (1: Authentication, 2: Management): ", (folderChoice) => {
  const basePath = path.join(__dirname, "..", "src");
  const location = folderChoice === "1" ? "authentication" : folderChoice === "2" ? "management" : null;

  if (!location) {
    console.log("❌ Lựa chọn không hợp lệ!");
    rl.close();
    return;
  }

  rl.question("Nhập tên file: ", (fileName) => {
    if (!fileName) {
      console.log("❌ Tên file không được để trống!");
      rl.close();
      return;
    }

    rl.question("Nhập tên bảng: ", (tableName) => {
      if (!tableName) {
        console.log("❌ Tên bảng không được để trống!");
        rl.close();
        return;
      }

      const apiPath = path.join(basePath, "components", "api", location, fileName.toLowerCase());
      const constantsPath = path.join(basePath, "constants", location, fileName.toLowerCase());

      // Tạo thư mục nếu chưa có
      fs.mkdirSync(apiPath, { recursive: true });
      fs.mkdirSync(constantsPath, { recursive: true });

      generateFiles(fileName, tableName, location, apiPath, constantsPath);
    });
  });
});