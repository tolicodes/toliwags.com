source .env.local

ENVIRONMENT=production
LOCAL_USERNAME=`whoami`
REVISION=`git log -n 1 --pretty=format:"%H"`

curl https://api.rollbar.com/api/1/deploy/ \
  -F access_token=$ACCESS_TOKEN \
  -F environment=$ENVIRONMENT \
  -F revision=$REVISION \
  -F local_username=$LOCAL_USERNAME