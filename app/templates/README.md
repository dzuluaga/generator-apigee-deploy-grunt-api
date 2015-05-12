<%= apiname%>
=========
Add description here. @TODO

### Overview
Add overview here. @TODO

### API Resource /{resource}
Describe your API Resource. @TODO

#### Verbs

##### GET /{resource}
Describe the verb applied to the resource. @TODO

###### Parameters

| Parameter     | type          | sample values |
| ------------- |:-------------:| -------------:|
| {param_a}     | string        | {sample_value}|
| {param_b}     | integer       | {sample_value}|
| {param_c}     | date          | {sample_value}|


## Deploy this api proxy
You can deploy <%= apiname %> by calling this command.
```bash
grunt --env={env} --upload-modules --username={username} --password={password}
```
For additional instructions on other parameter, please check [Apigee Deploy Grunt Plugin Git Repo](https://github.com/apigeecs/apigee-deploy-grunt-plugin).

##Contributing

If you would like to contribute, simply fork the repository, push your changes to a branch and send a pull request:

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Typo fixes, improvements to grammar or readability, it's all welcome.
