<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["file"])) {
    $uploadDir = "uploads/"; // 업로드 폴더
    $uploadFile = $uploadDir . basename($_FILES["file"]["name"]);

    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true); // 폴더가 없으면 생성
    }

    if (move_uploaded_file($_FILES["file"]["tmp_name"], $uploadFile)) {
        echo "업로드 완료: " . $_FILES["file"]["name"];
    } else {
        echo "업로드 실패!";
    }
} else {
    echo "파일을 선택하세요.";
}
?>