<?php

    $conn = new mysqli("localhost", "root", "PUC@1234", "card-redsociais");

    $query = "SELECT idaplicativo, nome, descricao FROM aplicativo";
    $result = $conn->query($query);

    $applications = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $applications[] = $row;
        }
    }

    echo json_encode($applications);
    $conn->close();

?>