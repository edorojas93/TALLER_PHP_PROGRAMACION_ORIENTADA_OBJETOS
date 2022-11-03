<?php
    header("Access-Control-Allow-Origin: *");
    header('Content-Type: application/json; charset=utf-8');
    $_DATA = json_decode(file_get_contents("php://input"),true);

    class promedio{
        public $sumaA;
        public $cantA;
        public $sumaB;
        public $cantB;
        public $sumaC;
        public $cantC;

        public function __construct(int $sumaA,int $canA,int $sumaB,int $canB, int $sumaC,int $canC){
            $this->sumaA = $sumaA;
            $this->canA = $cantA;
            $this->sumaB = $sumaB;
            $this->canB = $cantB;
            $this->sumaC = $sumaC;
            $this->canC = $cantC;
        }

        public function promedioF():string{

            $sumaA = $this->sumaA;
            $cantA = $this->canA;
            $sumaB = $this->sumaB;
            $cantB = $this->canB;
            $sumaC = $this->sumaC;
            $cantC = $this->canC;

            $cantA<1?$promA=0:$promA = $sumaA/$cantA;
            $cantB<1?$promB=0:$promB = $sumaB/$cantB;
            $cantC<1?$promC=0:$promC = $sumaC/$cantC;

            if($promA>$promB && $promA>$promC){
                if($promB>$promC){
                    return "C";
                } else{
                    return "B";
                }
            } else if($promB>$promA && $promB>$promC){
                if($promA>$promC){
                    return "C";
                } else{
                    return "A";
                }
            } else if($promC>$promA && $promC>$promB){
                if($promA>$promB){
                    return "B";
                } else{
                    return "A";
                }
            } else{
                return "A, B, C";
            }
        }
    }
    $lista = new promedio(sumaA:$_DATA[0],cantA:$_DATA[1],sumaB:$_DATA[2],cantB:$_DATA[3],sumaC:$_DATA[4],cantC:$_DATA[5]);
    echo($lista->promedioF());
?>
