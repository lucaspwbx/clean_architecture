(dap-register-debug-template
 "TS Debug Server"
 (list :type "node"
       :request "launch"
       :program "${workspacefolder}/src/main/server.ts"
       :outFiles ["${workspaceFolder}/dist/**/*.js"]
       :name "Foo Server"))
