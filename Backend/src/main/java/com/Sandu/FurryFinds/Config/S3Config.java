package com.Sandu.FurryFinds.Config;

import com.Sandu.FurryFinds.AwsCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

public class S3Config {
    public static AmazonS3 getS3Client() {

        BasicAWSCredentials awsCredentials = new BasicAWSCredentials(AwsCredentials.awsAccess, AwsCredentials.awsSecret);
        return AmazonS3ClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                .withRegion(Regions.US_EAST_1).build();
    }

}
