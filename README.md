# Update Repository Description

Github action for update description on repository.

![](./img/readme.png)

## Usage

- [Example](./.github/workflows/main.yml)

```yaml
uses: zhengbangbo/update-repository-description@v0.0.1
with:
  repo: ${{ github.repository }}
  repo-token: ${{ secrets.MY_TOKEN }}
```

> **Note**
> 1. Creat [PAT(Personal access token)](https://github.com/settings/tokens) and set `actions secrets` of repository.
> 2. If `repo-token` use `secrets.GITHUB_TOKEN` or `github.token`, throw `Error: Resource not accessible by integration`. Like [this job](https://github.com/zhengbangbo/update-repository-description/actions/runs/3318862036/jobs/5483297578). Because the API requested in the program is Administration Scope[^1]. And this scope is not in the default permissions of GITHUB_TOKEN[^2]. 

[^1]: [administration scope - GitHub Docs](https://docs.github.com/en/rest/overview/permissions-required-for-github-apps#administration)

[^2]: [Permissions for the `GITHUB_TOKEN` - GitHub Docs](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)

## License

MIT
