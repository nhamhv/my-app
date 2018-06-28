<?php

// phpcs:disable
$_data = [];
const DATA_PATH = './data.json';

$method = $_SERVER['REQUEST_METHOD'] ?? '';
header('Content-Type: application/json');

$response = ['isError' => false];

switch ($method) {
    case 'GET':
        $response['data'] = [
            'plans' => getData(),
        ];
        break;

    case 'POST':
        $data = $_POST['plan'] ?? [];
        if (empty($data)) {
            $response['isError'] = false;
            $response['message'] = 'Data can\'t empty.';
        } else {
            $response['isError'] = insert($data);

            $response = $response['isError'] ? 'Insert successfully' : 'Insert failed';
        }
        break;

    case 'PUT':
        $data = $_POST['plan'] ?? [];
        if (empty($data)) {
            $response['isError'] = false;
            $response['message'] = 'Data can\'t empty.';
        } else {
            $response['isError'] = updateById($data, $_POST['id'] ?? '');

            $response = $response['isError'] ? 'Update successfully' : 'Update failed';
        }
        break;

    case 'DELETE':
        $id = $_POST['id'] ?? [];
        $response['isError'] = deleteById($id);

        $response = $response['isError'] ? 'Delete successfully' : 'Delete failed';
        break;


    default:
        break;
}
header('Access-Control-Allow-Origin: *');

echo json_encode($response);


function getData()
{
    global $data;
    if (!empty($data)) {
        return $data;
    }

    $data = json_decode(file_get_contents(DATA_PATH), 1);
}

function getById($id)
{
    $data = getData();

    foreach ($data as $item) {
        if ($item['id'] === $id) {
            return $item;
        }
    }

    return null;
}

function insert(array $data)
{
    $data['id'] = $data['id'] ?? uniqid();
    $data['created_at'] = date('Y-m-d H:i:s');

    $db = getData();
    array_push($db, $data);
    return writeFile($db);
}

function updateById($id, array $update)
{
    $data = getData();

    foreach ($data as $key => $item) {
        if ($item['id'] === $id) {
            $update['updated_at'] = date('Y-m-d H:i:s');
            $data[$key] = $update;

            writeFile($data);
            return true;
        }
    }

    return false;
}

function deleteById($id)
{
    $data = getData();

    foreach ($data as $key => $item) {
        if ($item['id'] === $id) {
            unset($data[$key]);

            writeFile($data);
            return true;
        }
    }

    return false;
}

function writeFile(array $data)
{
    global $_data;
    $_data = [];

    return file_put_contents(DATA_PATH, json_encode($data));
}
