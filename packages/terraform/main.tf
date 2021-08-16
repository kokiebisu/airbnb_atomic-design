resource "aws_rds_cluster" "postgres" {
    cluster_identifier = var.db_cluster_identifier
    engine = "aurora-postgresql"
    database_name = var.db_name
    master_username = var.db_master_username
    master_password = var.db_master_password
    enable_http_endpoint = true
    engine_mode = "serverless"
    engine_version = "10.14"
    skip_final_snapshot  = true

    scaling_configuration {
        auto_pause = true
        max_capacity = 2
        min_capacity = 2
        seconds_until_auto_pause = 300
        timeout_action = "ForceApplyCapacityChange"
    }
}