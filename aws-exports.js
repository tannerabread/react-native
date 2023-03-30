/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:aa9c62da-3b11-40f0-822f-d5cb8dc7c698",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_mfi0sPY4O",
    "aws_user_pools_web_client_id": "1ic22c742go2i0dofrc643f915",
    "oauth": {
        "domain": "rncliv5newdbf4e915-dbf4e915-dev.auth.us-east-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:3000/,myapp://,exp://127.0.0.1:19000/--/",
        "redirectSignOut": "http://localhost:3000/,myapp://,exp://127.0.0.1:19000/--/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [],
    "aws_cognito_social_providers": [
        "GOOGLE"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_user_files_s3_bucket": "rncliv5new72d124b2b27242e6a2bd0618a1491fb7150233-dev",
    "aws_user_files_s3_bucket_region": "us-east-1",
    "aws_mobile_analytics_app_id": "b1d059dda10944a0b281222c06a5b005",
    "aws_mobile_analytics_app_region": "us-east-1",
    "Analytics": {
        "AWSPinpoint": {
            "appId": "b1d059dda10944a0b281222c06a5b005",
            "region": "us-east-1"
        }
    },
    "Notifications": {
        "Push": {
            "AWSPinpoint": {
                "appId": "b1d059dda10944a0b281222c06a5b005",
                "region": "us-east-1"
            }
        },
        "InAppMessaging": {
            "AWSPinpoint": {
                "appId": "b1d059dda10944a0b281222c06a5b005",
                "region": "us-east-1"
            }
        }
    },
    "aws_bots": "enable",
    "aws_bots_config": [
        {
            "name": "BookTrip_dev",
            "alias": "$LATEST",
            "region": "us-east-1"
        },
        {
            "name": "OrderFlowers_dev",
            "alias": "$LATEST",
            "region": "us-east-1"
        }
    ],
    "aws_appsync_graphqlEndpoint": "https://it3kjbawffglrmi4fgk6k56z6y.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-fwnlszj4xvge5jjdh5inlrcdtq",
    "predictions": {
        "convert": {
            "translateText": {
                "region": "us-east-1",
                "proxy": false,
                "defaults": {
                    "sourceLanguage": "en",
                    "targetLanguage": "de"
                }
            }
        }
    }
};


export default awsmobile;
