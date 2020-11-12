(dap-register-debug-template
 "TS Debug Server"
 (list :type "node"
       :request "launch"
       :name "Launch Program"
       :program "${workspaceFolder}/src/main/server.ts"
       :outFiles ["${workspaceFolder}/dist/**/*.js"]
       :sourceMaps t
       :preLaunchTask "npm  run build"))
