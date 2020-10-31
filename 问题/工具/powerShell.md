# PowerShell常见问题

### 1.执行政策更改

在某些情况下，由于powershell的执行政策问题，可能会导致我们无法运行某些脚本，但该脚本在cmd下却可以运行，此时便需要更改powershell的执行政策来解决问题了。

以管理员的身份运行powershell，并执行以下代码即可更改执行政策

```power
 set-ExecutionPolicy RemoteSigned
```

