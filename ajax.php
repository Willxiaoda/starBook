
<?php  
function post($url, $post = null)  
{  
    $context = array();  
  
    if (is_array($post))  
    {  
        ksort($post);  
  
        $context['http'] = array  
        (  
            'method' => 'post',  
            'content' => http_build_query($post, '', '&'),  
        );  
    }
    return file_get_contents($url, false, stream_context_create($context));
}
echo post('http://localhost/5-5/request_post_result.php', $data);
?>